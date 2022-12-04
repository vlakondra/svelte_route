<script>
    import { link } from "svelte-spa-router";
</script>

<ul class="left-menu">
    <li><a href="/pagetwo/art_2_1" use:link> Пункт 2-1</a></li>
    <li><a href="/pagetwo/art_2_2" use:link> Пункт 2-2</a></li>
</ul>

<style>
    .left-menu {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
