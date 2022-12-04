<script>
  // @ts-nocheck

  import { location } from "svelte-spa-router";
  import Router, { link } from "svelte-spa-router";
  import PageOne from "./lib/learn_routes/page_one.svelte";
  import PageTwo from "./lib/learn_routes/page_two.svelte";
  import SubMenu_1 from "./lib/learn_routes/sub_menu_1.svelte";
  import SubMenu_2 from "./lib/learn_routes/sub_menu_2.svelte";

  import NotFound from "./lib/NotFound.svelte";
  import Home from "./lib/Home.svelte";

  const routes = {
    "/": Home,
    "/pageone": PageOne,
    "/pagetwo": PageTwo,
    "/pageone/*": PageOne,
    "/pagetwo/*": PageTwo,
    "*": NotFound,
  };

  let submenu = undefined;
  function callback(o) {
    switch ($location) {
      case "/":
        submenu = undefined;
        break;
      case "/pageone":
        submenu = SubMenu_1;
        break;
      case "/pagetwo":
        submenu = SubMenu_2;
        break;
      // case '/pagethree':
      //  submenu = SubMenu_3
      //   break;
      default:
        console.log("Маршрут не найден");
    }
  }
  location.subscribe(callback);
</script>

<main>
  <div class="wrapper">
    <div class="box header">
      <ul>
        <li><a href="/pageone" use:link>Страница первая</a></li>
        <li><a href="/pagetwo" use:link>Страница вторая</a></li>
        <li><a href="/pagethree" use:link>Страница третья</a></li>
      </ul>
    </div>
    <div class="box sidebar">
      <svelte:component this={submenu} />
    </div>
    <div class="box content">
      <Router {routes} />
    </div>
    <div class="box footer">Footer</div>
  </div>
</main>

<style>
  /*Roboto*/
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

  :global(a) {
    text-decoration: none;
    color: #5e3b80;
  }

  :global(a:hover) {
    color: aliceblue;
  }

  main {
    width: 960px;
    font-family: "Montserrat", sans-serif;
  }

  /* ================= */
  .wrapper {
    display: grid;
    grid-gap: 10px;

    grid-template-columns: 200px 1fr;
    grid-template-areas:
      "header  header"
      "sidebar content"
      "footer  footer";
    background-color: #fff;
    color: #444;
  }

  .box {
    background-color: rgb(245, 196, 196);
    color: rgb(91, 39, 39);
    border-radius: 5px;
    padding: 5px;
    font-size: 100%;
  }

  .content {
    grid-area: content;
    text-align: left;
    padding: 0 30px;
    min-height: 500px;
  }

  .header {
    grid-area: header;
  }
  .header ul {
    display: flex;
    list-style: none;
    flex-direction: row;
    justify-content: start;
    align-items: top;
  }
  .header ul li {
    margin-right: 20px;
  }

  .footer {
    grid-area: footer;
  }

  .sidebar {
    grid-area: sidebar;
    display: flex;
    justify-content: center;
    align-items: top;
  }
  .sidebar ul li:first-child {
    margin-top: 20px;
  }
  .sidebar ul li {
    margin-bottom: 20px;
  }

  .header,
  .footer {
    background-color: #999;
  }
</style>
