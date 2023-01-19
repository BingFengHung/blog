<template>
  <template v-for="(article, idx) in articleLink" :key="article">
    <ArticleCard :articleData="article"></ArticleCard>
  </template>
  <div class="pagination">
    <vue-awesome-paginate
      :total-items="50"
      :items-per-page="5"
      :max-pages-shown="1"
      v-model="currentPage"
      :show-breapoint-buttons="false"
      :show-jump-buttons="true"
      :on-click="onClickHandler"/>
  </div>
</template>

<script setup>
import { ref, reactive,onMounted } from 'vue'

let { id: tag } = useRoute().params
tag = tag.replace(' ', '')

let articleLink = reactive([])
const currentPage = ref(1);
let sortData = reactive([])

const getDataByDate = (data) => {
  return data.sort((a, b) => {
    const splitA = a.lastModifyDate.split('-')
    const splitB = b.lastModifyDate.split('-')

    const date1 = new Date(...splitA)
    const date2 = new Date(...splitB)
    return date2 - date1
  })
}

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
    data.value = data.value[tag]
    data.value = data.value.map(el => ({'group': tag,...el}))

    sortData = getDataByDate(data.value)

    data.value.forEach(el => {
      articleLink.push(el)
    })
  })
})

const onClickHandler = (page) => {
  const recentData = sortData.slice(6 * (page - 1), 6 + 6 * (page -1))

  articleLink = []

  recentData.forEach(el => {
    articleLink.push(el)
  })
};
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

