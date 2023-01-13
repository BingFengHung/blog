<template>
  <div class="article">
    <div class="content" v-html="article"></div>
    <NuxtLink :to="`/articles/${group}_${title}`">
      繼續閱讀
    </NuxtLink>
  </div>
</template>

<script setup>
import { marked } from 'marked'
import hljs from 'highlight.js'
import { ref, onMounted } from 'vue'
import 'highlight.js/styles/github-dark.css';
import convertImageUrl from '../utils/convertImageUrl'

const article = ref('')
const { group ,title, link } = defineProps(['group','title', 'link'])

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

      const articles = await useFetch(link)

      // const regex = /!\[\]\(.\//gm;
      // const segment = link.split('/')
      // let lastSegment = segment[segment.length - 1]
      // lastSegment = lastSegment.replace('.', '\.')
      // const baseUrl = link.replace(new RegExp(lastSegment + '$'), '')
      // const url = articles.data.value.replaceAll(regex, `![](${baseUrl}`)
      // const temp = articles.data.value.replaceAll(/\((.*?)\)/gm, (text) => {
      //   text = text.replace('(', '').replace(')', '').replace('./', '')
      //   text = `(${baseUrl}${text})`
      //   const final = text.replace(' ', '%20')
      //   return final
      // })
      const temp = convertImageUrl.imageUrlConverter(link, articles)

      article.value = marked(temp)
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
  height: 90%;
  overflow: hidden;
}

button {
}
</style>