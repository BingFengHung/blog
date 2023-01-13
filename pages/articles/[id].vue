<template>
  <div class="article">
    <div>{{ describe }}</div>
    <div v-html="article"></div>
  </div>
</template>

<script setup>
import { marked } from 'marked'
import hljs from 'highlight.js'
import { ref, onMounted } from 'vue'
import 'highlight.js/styles/github-dark.css';

const article = ref('')
const { id } = useRoute().params
const { describe } = ref('')

onMounted(async () => {
  marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        if (language && hljs.getLanguage(language)) {
          return '<div class="hljs">' + hljs.highlight(validLanguage, code).value + '</div>';
        }
        return hljs.highlight(validLanguage, code).value;
      },
      // highlight: function (code, language) {
      //   const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      //   return hljs.highlight(validLanguage, code).value;
      // },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });

  const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')
  console.log(data.value)

  //const articles = await useFetch(data.value['Node.js'][0].link)
  const articles = await useFetch("https://bingfenghung.github.io/Articles/CSharp/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A.md")
  console.log(articles.data.value)

  article.value = marked(articles.data.value)
  })

</script>

<style scoped>
.article {
  border: 1px solid #ccc;
  padding:  10px;
  border-radius: 5px;
  background-color: #fff;
}
</style>

