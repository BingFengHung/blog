<template>
  <div class="article">
    <div>{{ describe }}</div>
    <div v-html="article"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import convertImageUrl from '~~/utils/convertImageUrl';
import marked from '../../utils/markedSetup';

const article = ref('')
const { id } = useRoute().params
const { describe } = ref('')


let [group, title] = id.split('_')

onMounted(async () => {
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
    article.value = marked.marked(temp)
  })
})
</script>

<style>
img {
  width: 100%;
}
</style>

<style scoped>
.article {
  padding:  10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%)
}

</style>

