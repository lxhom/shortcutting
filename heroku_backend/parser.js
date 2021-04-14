// noinspection JSUnresolvedVariable

const axios = require('axios').default;
const jsdom = require("jsdom");
const express = require("express");
let syncResult;
let keys = [
  "win",
  "windows",
  "menu",
  "escape",
  "esc",
  "control",
  "ctrl",
  "print",
  "prnt",
  "tab",
  "shift",
  "alt",
  "space",
  "spacebar",
  "up arrow",
  "down arrow",
  "left arrow",
  "right arrow",
  "del",
  "delete",
  "enter",
  "prtscn"
];

let bindRegx = /[a-z0-9+ ]+: [a-z. ]+/;

let parser = (input, rec) => {
  input = input.replace(/ /g, " ");
  let lines = [];
  input.split("\n").forEach(line => {
    let origLine = line;
    line = line.toLowerCase().replace(/and|or|-|,/, "+").replace(/[\s]*\+[\s]*/, "+");
    if (line.match(bindRegx)) {
      //console.log("Possible match found: ", line)
      let parts = line.split(": ");
      //console.log("Possible keys:", parts[0]
      //    .split("+")
      //)
      let nonKeys = parts[0]
          .split("+")
          .filter(x => {
            //console.log("checking", x)
            if (x.match(/^[a-z0-9]$/) || x.match(/^F[0-9]+$/)) {
              //console.log(x, "matched regex")
              return false;
            }
            let res = false;
            keys.forEach(key => {
              if (x.replace(key, "") === "") {
                //console.log(x, "got replaced by", key)
                res = true;
              }
            });
            if (res) {
              return false;
            }
            //console.log(x, "is not a key")
            return true;
          });

      if (nonKeys.length !== 0) {
        //console.log("Non-keys found:", nonKeys)
      } else {
        // console.warn("Keybind found:", origLine)
        if (origLine.split(": ").length === 2 &&
            origLine.split(": ")[0].length !== 0 &&
            origLine.split(": ")[1].length < 250) {
          lines.push(origLine);
        }
      }
    }
  });
  if (rec === undefined && lines.length === 0) {
    return parser(input.replace(/	/g, ": "), true);
  }
  return lines;
};

let resultUrl = "https://api.apify.com/v2/actor-tasks/gh3YJd0OSWqO3Z1R6/run-sync-get-dataset-items?token=koFipveCsbP55dNzveoQ4TbD5";

let getShortcuts = async () => {
  console.log("starting")
  let res = await axios.get(resultUrl);
  console.log("got search results")
  let funcs = res.data[0].organicResults.map((o, i) => async () => {
    console.log("loading page", i)
    let data = (await axios.get(o.url)).data
    console.log("loaded page", i);
    return [data, o];
  });
  let result = await Promise.all(funcs.map(func => func()));
  console.log("all pages loaded")
  // let htmlFiles = result.map(res => res.data)
  // let htmlFiles = JSON.parse(require("fs").readFileSync("tmp.json").toString())
  let shortcuts = [];
  result.map((res, i) => {
    console.log("parsing page", i)
    let dom = new jsdom.JSDOM(res[0]);
    shortcuts.push(
        ...parser(dom.window.document.body.textContent)
            .map(str => {
              return {
                key: str.split(": ")[0],
                value: str.split(": ")[1],
                origin: {
                  title: res[1].title,
                  url: res[1].url
                }
              };
            })
    );
    console.log("parsed page", i)
  });
  syncResult = shortcuts;
  return shortcuts
};


let app = express();

app.get("/start", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  getShortcuts();
  res.send('{"status": "working"')
})
app.get("/sync", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let localResult = await getShortcuts();
  res.send(JSON.stringify(localResult))
})
app.get("/result", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(syncResult))
})
app.get("/test", (req, res) => res.send("hi"))

app.listen(process.env.PORT)