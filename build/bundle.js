var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let h;function p(t){h=t}function g(){if(!h)throw new Error("Function called outside component initialization");return h}const m=[],b=[],v=[],k=[],y=Promise.resolve();let $=!1;function w(t){v.push(t)}let x=!1;const _=new Set;function E(){if(!x){x=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];p(e),S(e.$$)}for(p(null),m.length=0;b.length;)b.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];_.has(e)||(_.add(e),e())}v.length=0}while(m.length);for(;k.length;)k.pop()();$=!1,x=!1,_.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const T=new Set;let H;function A(t,e){t&&t.i&&(T.delete(t),t.i(e))}function L(t,e){const n=e.token={};function r(t,r,c,l){if(e.token!==n)return;e.resolved=l;let s=e.ctx;void 0!==c&&(s=s.slice(),s[c]=l);const i=t&&(e.current=t)(s);let a=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(H={r:0,c:[],p:H},function(t,e,n,o){if(t&&t.o){if(T.has(t))return;T.add(t),H.c.push((()=>{T.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),H.r||o(H.c),H=H.p)})):e.block.d(1),i.c(),A(i,1),i.m(e.mount(),e.anchor),a=!0),e.block=i,e.blocks&&(e.blocks[r]=i),a&&E()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const n=g();if(t.then((t=>{p(n),r(e.then,1,e.value,t),p(null)}),(t=>{if(p(n),r(e.catch,2,e.error,t),p(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var c}function j(t,e){-1===t.$$.dirty[0]&&(m.push(t),$||($=!0,y.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(c,l,s,a,u,d,f=[-1]){const g=h;p(c);const m=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:l.context||[]),callbacks:n(),dirty:f,skip_bound:!1};let b=!1;if(m.ctx=s?s(c,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),b&&j(c,t)),e})):[],m.update(),b=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();l.intro&&A(c.$$.fragment),function(t,n,c,l){const{fragment:s,on_mount:i,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,c),l||w((()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(w)}(c,l.target,l.anchor,l.customElement),E()}p(g)}function M(t,e,n){const o=t.slice();return o[3]=e[n],o}function C(e){let n,o,r=e[6]+"";return{c(){n=u("Something went wrong.\n        Error: "),o=u(r)},m(t,e){s(t,n,e),s(t,o,e)},p:t,d(t){t&&i(n),t&&i(o)}}}function N(t){let e,n,o,r,c,u=t[2],h=[];for(let e=0;e<u.length;e+=1)h[e]=P(M(t,u,e));return{c(){e=a("table"),n=a("tr"),n.innerHTML='<td colspan="3" class="svelte-5ip79a">Keyboard shortcuts</td>',o=d(),r=a("tr"),r.innerHTML='<td class="svelte-5ip79a">Key</td> \n                <td class="svelte-5ip79a">Function</td> \n                <td class="svelte-5ip79a">Source</td>',c=d();for(let t=0;t<h.length;t+=1)h[t].c();f(n,"class","svelte-5ip79a"),f(r,"class","svelte-5ip79a"),f(e,"class","svelte-5ip79a")},m(t,i){s(t,e,i),l(e,n),l(e,o),l(e,r),l(e,c);for(let t=0;t<h.length;t+=1)h[t].m(e,null)},p(t,n){if(2&n){let o;for(u=t[2],o=0;o<u.length;o+=1){const r=M(t,u,o);h[o]?h[o].p(r,n):(h[o]=P(r),h[o].c(),h[o].m(e,null))}for(;o<h.length;o+=1)h[o].d(1);h.length=u.length}},d(t){t&&i(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(h,t)}}}function P(e){let n,o,r,c,h,p,g,m,b,v,k,y=e[3].key+"",$=e[3].value+"",w=e[3].origin.title+"";return{c(){n=a("tr"),o=a("td"),r=u(y),c=d(),h=a("td"),p=u($),g=d(),m=a("td"),b=a("a"),v=u(w),k=d(),f(o,"class","svelte-5ip79a"),f(h,"class","svelte-5ip79a"),f(b,"href",e[3].origin.url),f(m,"class","svelte-5ip79a"),f(n,"class","svelte-5ip79a")},m(t,e){s(t,n,e),l(n,o),l(o,r),l(n,c),l(n,h),l(h,p),l(n,g),l(n,m),l(m,b),l(b,v),l(n,k)},p:t,d(t){t&&i(n)}}}function F(e){let n;return{c(){n=u("Fetching data... (This usually takes up to 30 seconds)")},m(t,e){s(t,n,e)},p:t,d(t){t&&i(n)}}}function O(e){let n,o,r,c,u,h,p,g,m,b={ctx:e,current:null,token:null,hasCatch:!0,pending:F,then:N,catch:C,value:2,error:6};return L(e[1](),b),{c(){n=a("div"),b.block.c(),o=d(),r=a("div"),r.innerHTML='This page was auto-generated. I cannot control the results, and they might be wrong. <label id="label" for="checkbox" class="svelte-5ip79a">How it works</label>',c=d(),u=a("input"),h=d(),p=a("div"),p.innerHTML='This page connects to my Heroku backend. It does the following things:\n        <ul><li>Scrape Google results for &quot;keyboard shortcuts&quot; with apify</li> \n            <li>Download 10 search results</li> \n            <li>Parse the results with a lot of Regular Expressions and Javascript</li> \n            <li>Send the results as JSON as a REST API (you can see the raw data <a href="https://shortcutting.herokuapp.com/sync">here</a>)</li></ul>\n        This page then gets the results from the REST API by using the Fetch API, and then it uses Svelte and JS/CSS/HTML to\n        display it as a table.\n        You can see the whole project&#39;s code (Heroku backend AND Svelte frontend) on <a href="https://github.com/lxhom/shortcutting">GitHub</a>.',f(u,"type","checkbox"),u.hidden=!0,f(u,"id","checkbox"),f(u,"class","svelte-5ip79a"),f(p,"id","more"),f(p,"class","svelte-5ip79a"),f(n,"id","content"),f(n,"class","svelte-5ip79a")},m(t,i){var a,d,f,v;s(t,n,i),b.block.m(n,b.anchor=null),b.mount=()=>n,b.anchor=o,l(n,o),l(n,r),l(n,c),l(n,u),l(n,h),l(n,p),g||(a=u,d="click",f=e[0],a.addEventListener(d,f,v),m=()=>a.removeEventListener(d,f,v),g=!0)},p(t,[n]){{const o=(e=t).slice();o[2]=o[6]=b.resolved,b.block.p(o,n)}},i:t,o:t,d(t){t&&i(n),b.block.d(),b.token=null,b=null,g=!1,m()}}}function q(t){return[()=>setInterval((()=>{window.scrollBy({top:1e4,left:0,behavior:"smooth"})}),50),async()=>{let t=await fetch("https://shortcutting.herokuapp.com/sync");return await t.json()}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),I(this,t,q,O,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
