<script>
    let txt = "Lorem ipsum";
    let editing = false;

    function toggleEdit() {
        editing = !editing;
    }
</script>

<div class="con-tent">
    <p>
        Введенный текст: {txt}
    </p>

    {#if editing}
        <label>
            Текст:
            <input class="input" type="text" bind:value={txt} />
        </label>
    {/if}

    <button class="button" on:click={toggleEdit}>
        {editing ? "Подтвердить" : "Ввести текст"}
    </button>
</div>
<p class="comment">
    Этот пользовательский интерфейс немного раздражает, поскольку после нажатия
    кнопки редактирования необходимо кликнуть в поле input или нажать клавишу
    Tab. Было бы лучше, если бы input фокусировалcя автоматически, чтобы  можно
     было сразу вводить текст. Как решить эту задачу?
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
