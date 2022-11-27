<script>
    import { link } from "svelte-spa-router";
</script>

<h3>Краткие сведения об авторах</h3>
<ul>
    <li><a href="/author/1" use:link>Иванов</a></li>
    <li><a href="/author/2" use:link>Петров</a></li>
    <li><a href="/author/3" use:link>Сидоров</a></li>
</ul>

<style>
    h3 {
        text-align: center;
    }
    ul {
        list-style: none;
        width: 300px;
        margin: 20px auto;
    }
</style>
