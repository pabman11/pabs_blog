import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
    return function (tree, { data }) {
        const textOnPage = toString(tree);
        const readingTime = getReadingTime(textOnPage);
        // readingTime.text nos dará el tiempo de lectura en minutos como un  string legible,
        // p. ej. "3 min read"
        data.astro.frontmatter.minutesRead = readingTime.text;
    };
}