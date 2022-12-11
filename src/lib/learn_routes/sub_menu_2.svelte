<script>
    import { link } from "svelte-spa-router";
    import active from "svelte-spa-router/active";
</script>

<ul class="left-menu">
    <li><a href="/pagetwo/art_2_1" use:link use:active> Пункт 2-1</a></li>
    <li><a href="/pagetwo/art_2_2" use:link use:active> Пункт 2-2</a></li>
</ul>

<style>
    .left-menu {
        list-style: none;
        margin: 20px 0;
        padding: 0;
    }
</style>
