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

      data.value['VisualStudio'] = data.value['VisualStudio'].map(el => {
        el.link = el.link.replaceAll('#', '%23').replaceAll(' ', '%20')
        el.title = el.title.replaceAll('#', '%23').replaceAll(' ', '%20')
        return {...el}
      })
      data.value['JavaScript'] = data.value['JavaScript'].map(el => {
        el.link = el.link.replaceAll('#', '%23').replaceAll(' ', '%20')
        el.title = el.title.replaceAll('#', '%23').replaceAll(' ', '%20')
        return {...el}
      })

      data.value['C#'] = data.value['C#'].map(el => {
        el.link = el.link.replaceAll('#', '%23').replaceAll(' ', '%20')
        el.title = el.title.replaceAll('#', '%23').replaceAll(' ', '%20')
        return {...el}
      })

    data.value['CSharp'] = data.value['C#']
    delete data.value['C#']

    title = title.replaceAll('#', '%23').replaceAll(' ', '%20')

    const result = data.value[group].filter(el => el.title == title)
    console.log(result)
    // console.log(data.value)
    // const dataSet = Object.keys(data.value).reduce((pre, cur) => {
    //   const datas = data.value[cur].map(el => ({"group": cur, ...el}))
    //   return pre.concat(datas)
    // }, [])  

    // console.log(dataSet)
    // const result = dataSet[group].filter(item => item.title === title)
    // console.log('result', result)
  // const articles = await useFetch(data.value['Node.js'][0].link)
  // const articles = await useFetch("https://bingfenghung.github.io/Articles/CSharp/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A.md")
  const articles = await useFetch(result[0].link)

  const temp = convertImageUrl.imageUrlConverter(result[0].link, articles)
  // article.value = marked(articles.data.value)
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

