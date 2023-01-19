<template>
  <div>
    <h2>Articles</h2>
    <div v-html="article"></div>
    <pagination :="10"></pagination>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import marked from '../../utils/markedSetup'

const article = ref('')
const { id } = useRoute().params

onMounted(async () => {
  const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')

  //const articles = await useFetch(data.value['Node.js'][0].link)
  const articles = await useFetch("https://bingfenghung.github.io/Articles/CSharp/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A.md")

  article.value = marked.marked(articles.data.value)
  })

</script>

<style scoped>

</style>

