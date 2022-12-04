<script>
    import { location } from "svelte-spa-router";
    import Router from "svelte-spa-router";
    import Art_2_1 from "./art_2_1.svelte";
    import Art_2_2 from "./art_2_2.svelte";

    const routes = {
        "/art_2_1": Art_2_1,
        "/art_2_2": Art_2_2,
    };

    const prefix = "/pagetwo";
</script>

<div>
    <p style="text-align: right;">{$location}</p>

    <h1>Вторая Страница</h1>
    <Router {routes} {prefix} />
</div>
