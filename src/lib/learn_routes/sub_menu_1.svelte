<script>
    import { link } from "svelte-spa-router";
    import active from "svelte-spa-router/active";
</script>

<ul class="left-menu">
    <li><a href="/pageone/art_1_1" use:link use:active> Пункт 1-1</a></li>
    <li><a href="/pageone/art_1_2" use:link use:active> Пункт 1-2</a></li>
    <li><a href="/pageone/art_1_3" use:link use:active> Пункт 1-3</a></li>
</ul>

<style>
    .left-menu {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
