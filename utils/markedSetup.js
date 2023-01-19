import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css';

const markedSetup = () => {
  marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        if (language && hljs.getLanguage(language)) {
          return '<div class="hljs">' + hljs.highlight(validLanguage, code).value + '</div>';
        }
        return hljs.highlight(validLanguage, code).value;
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