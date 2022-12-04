import Home from "./lib/Home.svelte";
import Article from "./lib/Article.svelte";
import Authors from "./lib/Authors.svelte";
import Author from "./lib/Author.svelte";
import NotFound from "./lib/NotFound.svelte";

import {get, writable} from 'svelte/store'
import  {location}  from "svelte-spa-router";
console.log("routes",  location);


function callback(o){
  console.log("O",o)
}
location.subscribe(callback)


export const routes = {
  // Exact path
  "/": Home,
  "/authors/": Authors,
  "/author/:id": Author,
  // Exact path + parameter
  "/article/:title": Article,
  // Wildcard
  "*": NotFound
};