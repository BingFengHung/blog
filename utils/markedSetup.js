import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css';

const markedSetup = () => {
  marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        if (language && hljs.getLanguage(language)) {
          const result = hljs.highlight(code, { "language": validLanguage }).value
          return `<div class="hljs code-label code-${validLanguage}" data-code=${validLanguage}>${result}</div>`
        }
        const result = hljs.highlight(code, { "language": validLanguage }).value
        return '<div class="hljs plaintext">' + result + '</div>';
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
}

markedSetup()

export default {
  marked 
}