<script>
    import { loremIpsum } from "lorem-ipsum";
</script>

<h2>Страница 1-3</h2>
{@html loremIpsum({
    count: 30, // Number of "words", "sentences", or "paragraphs"
    format: "html", // "plain" or "html"
    paragraphLowerBound: 3, // Min. number of sentences per paragraph.
    paragraphUpperBound: 5, // Max. number of sentences per paragarph.
    random: Math.random, // A PRNG function
    sentenceLowerBound: 5, // Min. number of words per sentence.
    sentenceUpperBound: 6, // Max. number of words per sentence.
    suffix: "\n", // Line ending, defaults to "\n" or "\r\n" (win32)
    units: "sentences", // paragraph(s), "sentence(s)", or "word(s)"
})}
