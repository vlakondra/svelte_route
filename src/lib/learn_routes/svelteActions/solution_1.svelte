<script>
    let txt = "Lorem ipsum";
    let editing = false;
    let input;

    function toggleEdit() {
        editing = !editing;
        if (editing) {
            input.focus();
        }
    }
</script>

<div class="con-tent">
    <p>
        Введенный текст: {txt}
    </p>

    {#if editing}
        <label>
            Текст:
            <input
                class="input"
                type="text"
                bind:value={txt}
                bind:this={input}
            />
        </label>
    {/if}

    <button class="button" on:click={toggleEdit}>
        {editing ? "Подтвердить" : "Ввести текст"}
    </button>
</div>

<p class="comment">
    Кажется логичным связать DOM-элемент input c переменной посредством
    директивы bind:this=input, где input - имя переменной. Тогда в обработчик
    toggleEdit можно было бы добавить условный оператор и устанавливать фокус
    при получении переменной editing значения true (см. стр. 7-9 в исходном коде
    компонента). Однако это не будет работать, поскольку в момент срабатывания
    toggleEdit DOM-элемент input еще не добавлен в структуру документа.
    Вызывается ошибка <span
        style="color:black; font-weight: 600;font-size: larger;"
        >TypeError: input is undefined</span
    >, которую можно увидеть при включенной панели разработчика.
</p>

<style>
    input {
        width: 75%;
        display: block;
    }
    .con-tent {
        height: 150px;
    }
    .comment {
        margin-top: 0px;
    }
</style>
