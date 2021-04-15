# shortcutting
## A website that shows shortcuts. Random shortcuts scraped from random websites.

This page connects to my Heroku backend. It does the following things:
- Scrape Google results for "keyboard shortcuts" with apify
- Download 10 search results
- Parse the results with a lot of Regular Expressions and Javascript
- Send the results as JSON as a REST API (you can see the raw data [here](https://shortcutting.herokuapp.com/sync))

This page then gets the results from the REST API by using the Fetch API, and then it uses Svelte and JS/CSS/HTML to display it as a table. 
