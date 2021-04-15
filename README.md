# shortcutting
## A website that shows shortcuts. Random shortcuts scraped from random websites.

### [The Page in Action](https://lxhom.github.io/shortcutting)

[This page](/frontend) connects to my [Heroku](https://heroku.com) [backend](/heroku_backend). It does the following things:
- Scrape Google results for "keyboard shortcuts" with apify
- Download 10 search results
- Parse the results with a lot of Regular Expressions and Javascript
- Send the results as JSON with a REST API (you can see the raw data [here](https://shortcutting.herokuapp.com/sync))

The page then gets the results from the REST API by using the Fetch API, and then it uses [Svelte](https://svelte.dev) and JS/CSS/HTML to display it as a table. 
