<script>
    import { loremIpsum } from "lorem-ipsum";
</script>

<h2>Раздел 1-2</h2>
{@html loremIpsum({
    count: 10, // Number of "words", "sentences", or "paragraphs"
    format: "html", // "plain" or "html"
    paragraphLowerBound: 3, // Min. number of sentences per paragraph.
    paragraphUpperBound: 7, // Max. number of sentences per paragarph.
    random: Math.random, // A PRNG function
    sentenceLowerBound: 5, // Min. number of words per sentence.
    sentenceUpperBound: 15, // Max. number of words per sentence.
    suffix: "\n", // Line ending, defaults to "\n" or "\r\n" (win32)
    units: "paragraphs", // paragraph(s), "sentence(s)", or "word(s)"
})}
