<script>
    import tippy from "tippy.js";
    import "tippy.js/dist/tippy.css";
    let txt = "Lorem ipsum";
    let editing = false;
    // let input;

    function toggleEdit() {
        editing = !editing;
        // if (editing) {
        //     input.focus();
        // }
    }

    //Добавим эту функцию и установим тип  её аргумента (не обязательно)
    /**
     * @param {HTMLInputElement} node
     */
    function focusOnMount(node) {
        //node - это ссылка на input, уже загруженный в структуру документа
        node.classList.add("is-large");
        node.focus();
        //
    }

    /**
     * @param {import("tippy.js").MultipleTargets | HTMLButtonElement} node
     */
    function tooltip(node) {
        let tip = tippy(node, { content: "Работа с текстом" });
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
                use:focusOnMount
            />
        </label>
    {/if}

    <button use:tooltip class="button" on:click={toggleEdit}>
        {editing ? "Подтвердить" : "Ввести текст"}
    </button>
</div>

<p class="comment">
    Для решения подобных проблем в Svelte есть API, называющееся <span
        class="vars">action</span
    >, или директива <span class="vars">use</span>. При помощи директивы
    <span class="vars">use</span>, которая указывается в атрибутах DOM-элемента,
    Svelte вызывает указанную функцию, причем строго после того, как этот
    элемент добавился в структуру документа. В этой функции с элементом можно
    производить любые допустимые операции, например, добавлять стили,
    устанавливать фокус и т.д. В данном случае в качестве action-функции в
    компонент была добавлена функция <span class="vars">focusOnMount</span>
    (см. стр. 17 в исходном коде компонента), которая и решила все проблемы.
</p>
<p style="margin-bottom: 20px;">
    Другой пример - использование директивы <span class="vars">use</span>
    для подключения tooltips'ов из библиотеки
    <span class="vars">tippy.js</span>. Реализован на клавише посредством
    функции <span class="vars">tooltip</span>.
</p>

<style>
    .vars {
        color: black;
        font-size: larger;
        font-weight: 600;
    }
    input {
        width: 75%;
        display: block;
    }
    .con-tent {
        min-height: 170px;
    }
    .comment {
        margin-top: 0px;
    }
</style>
