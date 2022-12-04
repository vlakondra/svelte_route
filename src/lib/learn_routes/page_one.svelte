<script>
    import { location } from "svelte-spa-router";
    import Router from "svelte-spa-router";
    import Art_1_1 from "./art_1_1.svelte";
    import Art_1_2 from "./art_1_2.svelte";
    import Art_1_3 from "./art_1_3.svelte";

    const routes = {
        "/art_1_1": Art_1_1,
        "/art_1_2": Art_1_2,
        "/art_1_3": Art_1_3,
    };

    const prefix = "/pageone";
</script>

<div>
    <p style="text-align: right;">{$location}</p>

    <h1>Первая Страница</h1>
    <Router {routes} {prefix} />
</div>
