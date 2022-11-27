import Home from "./lib/Home.svelte";
import Article from "./lib/Article.svelte";
import Authors from "./lib/Authors.svelte";
import Author from "./lib/Author.svelte";
import NotFound from "./lib/NotFound.svelte";

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