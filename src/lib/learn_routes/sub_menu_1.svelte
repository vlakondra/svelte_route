<script>
    import { link } from "svelte-spa-router";
    import active from "svelte-spa-router/active";
</script>

<ul class="left-menu">
    <li>
        <a href="/pageone/input_focus" use:link use:active> Фокусирование </a>
    </li>
    <li><a href="/pageone/solution1" use:link use:active>Решение this</a></li>
    <li><a href="/pageone/solution_use" use:link use:active>Решение use</a></li>
</ul>

<style>
    .left-menu {
        list-style: none;
        margin: 20px 0;
        padding: 0;
    }
</style>
