<script>
    const authors = [
        { id: 1, fam: "Иванов И.И.", age: 40 },
        { id: 2, fam: "Петров П.П.", age: 30 },
        { id: 3, fam: "Сидоров С.С.", age: 20 },
    ];

    export let params = {};
    console.log(params.id, params);
    let auth = authors.filter((o) => o.id == params.id)[0];
</script>

<div class="wrapper">
    <div>{authors.filter((o) => o.id == Number(params.id))[0].fam}</div>
    <div>{auth.age} лет</div>
</div>

<style>
    .wrapper {
        display: flex;
        width: 200px;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }
</style>
