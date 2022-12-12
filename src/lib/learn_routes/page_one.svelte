<script>
    import { location } from "svelte-spa-router";
    import Router from "svelte-spa-router";
    import InputFocus from "./svelteActions/input_focus.svelte";
    import Solution_1 from "./svelteActions/solution_1.svelte";
    import SolutionUse from "./svelteActions/solution_use.svelte";

    // import Art_1_1 from "./art_1_1.svelte";
    // import Art_1_2 from "./art_1_2.svelte";
    //import Art_1_3 from "./art_1_3.svelte";

    const routes = {
        "/input_focus": InputFocus,
        "/solution1": Solution_1,
        "/solution_use": SolutionUse,
    };

    const prefix = "/pageone";
</script>

<div>
    <p style="text-align: right;">{$location}</p>

    <h2>Действия или директива <code>use</code></h2>
    <hr />
    <Router {routes} {prefix} />
</div>
