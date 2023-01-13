<template>
  <div class="article">
    <div class="content" v-html="article"></div>
    <NuxtLink to="/articles/1"><button>繼續閱讀</button> </NuxtLink>
  </div>
</template>

<script setup>
import { marked } from 'marked'
import hljs from 'highlight.js'
import { ref, onMounted } from 'vue'
import 'highlight.js/styles/github-dark.css';

const article = ref('')
const { link } = defineProps(['link'])

onMounted(async () => {
  // marked.setOptions({
  //   langPrefix: 'hljs language-',
  //   highlight: function(code) {
  //     return hljs.highlightAuto(code, ["html", "javascript"]).value;
  //   }
  // })
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

    nextTick( async () => {
      const data  = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')

      //const articles = await useFetch(data.value['Node.js'][0].link)
      // console.log(link)
      const articles = await useFetch(link)

      // console.log(articles.data.value)
      const regex = /!\[\]\(.\//gm;
      const segment = link.split('/')
      let lastSegment = segment[segment.length - 1]
      // console.log('last', lastSegment)
      lastSegment = lastSegment.replace('.', '\.')
      console.log(lastSegment)
      const baseUrl = link.replace(new RegExp(lastSegment + '$'), '')
      console.log('Replace', baseUrl)
      const url = articles.data.value.replaceAll(regex, `![](${baseUrl}`)
      console.log(url)


      // article.value = marked(articles.data.value)
      // console.log(url)
      article.value = marked(url)
    })

})

</script>

<style scoped>
.article {
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  height: 300px;
  margin-bottom: 10px;
  padding: 10px;
}

.content {
  height: 200px;
  overflow: hidden;
}

button {

}
</style>