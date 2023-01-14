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
  padding: 0px 20px;
  background-color: white;
  box-sizing: border-box;
}

.content {
  height: 90%;
  overflow: hidden;
}

button {
}

@media screen and (min-width: 1024px) {
  /*STYLES*/
}

@media screen and (min-width: 1200px) {
  /* 如果使用者之視窗寬度 >= 1200px，將會再載入這裡的 CSS。 */
}

@media screen and (min-width: 768px) and (max-width: 979px) {
  /* 如果使用者之視窗寬度介於 768px ~ 979px，將會再載入這裡的 CSS。 */
}

@media screen and (max-width: 767px) {
  /* 如果使用者之視窗寬度 <= 768px，將會再載入這裡的 CSS。*/
}

@media screen and (max-device-width: 480px) {
  /* 如果使用者之裝置寬度 <= 480px，將會再載入這裡的 CSS。 */
  .article {
    
  }
}
</style>