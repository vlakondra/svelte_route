<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";

  import { location } from "svelte-spa-router";
  import Router, { link } from "svelte-spa-router";
  import { routes } from "./routes.js";

  export let params = {};
  console.log("App", params.id, params);
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>
  <h2>{$location}</h2>
  <h3><a href="/" use:link>TravelTheWorld.com</a></h3>
  <h4><a href="/authors" use:link>Авторы</a></h4>
  <Router {routes} />
</main>

<style>
  /*Roboto*/
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  :global(body) {
    margin: 0;
    padding: 20px;
  }

  :global(a) {
    text-decoration: none;
    color: #551a8b;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;
  }
</style>
