import Home from "./lib/Home.svelte";
import Article from "./lib/Article.svelte";
import NotFound from "./lib/NotFound.svelte";

export const routes = {
  // Exact path
  "/": Home,
  // Exact path + parameter
  "/article/:title": Article,
  // Wildcard
  "*": NotFound
};