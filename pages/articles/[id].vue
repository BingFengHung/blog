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
import convertImageUrl from '~~/utils/convertImageUrl';

const article = ref('')
const { id } = useRoute().params
const { describe } = ref('')


let [group, title] = id.split('_')
console.log(group, title)

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

  nextTick(async () => {
    const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')

    data.value = Object.keys(data.value).reduce(((pre, cur) => {
      const dataSet = data.value[cur] = data.value[cur].map(el => {
        el.link = el.link.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')
        el.title = el.title.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')
        return {...el}
      })

      return ({[cur]: dataSet, ...pre})
    }), {})

    data.value['CSharp'] = data.value['C#']
    delete data.value['C#']

    data.value['VCpp'] = data.value['Visual C++']
    delete data.value['Visual C++']

    title = title.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')

    const result = data.value[group].filter(el => el.title == title)
    const articles = await useFetch(result[0].link)

    const temp = convertImageUrl.imageUrlConverter(result[0].link, articles)
    article.value = marked(temp)
  })
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

