<template>
  <div>
    <template v-for="(article, idx) in articleLink" :key="article">
      <ArticleCard :articleData="article"></ArticleCard>
    </template>
    <div class="pagination">
      <vue-awesome-paginate
        :total-items="100"
        :items-per-page="5"
        :max-pages-shown="1"
        v-model="currentPage"
        :show-breapoint-buttons="false"
        :show-jump-buttons="true"
        :on-click="onClickHandler"/>
    </div>
  </div>
</template>

<script setup>
import 'highlight.js/styles/github-dark.css';
import { ref, onMounted } from 'vue'
import { useArticleStore } from '../store/articles'

let articleLink = reactive([])
let sortData = reactive([])

const currentPage = ref(1);

const articleStore = useArticleStore()

const getDataByDate = (data) => {
  const dataSet = Object.keys(data).reduce((pre, cur) => {
    const datas = data[cur].map(el => ({"group": cur, ...el}))
    return pre.concat(datas)
  }, [])

  return dataSet.sort((a, b) => {
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
    articleStore.setData(data)

    data.value = Object.keys(data.value).reduce(((pre, cur) => {
      const dataSet = data.value[cur] = data.value[cur].map(el => {
        el.link = el.link.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')
        el.title = el.title.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')
        return { ...el }
      })

      return ({[cur]: dataSet, ...pre})
    }), {})


    data.value['CSharp'] = data.value['C#']
    delete data.value['C#']

    data.value['VCpp'] = data.value['Visual C++']
    delete data.value['Visual C++']

    sortData = getDataByDate(data.value)

    const recentData = sortData.slice(0, 6)

    recentData.forEach(el => {
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

Array.prototype.asyncForEach = async function(callback) {
  for (let i = 0; i < this.length; i++) {
    await callback(this[i], i, this)
  }
}
</script>

<style>
.hljs {
  padding: 15px;
  border-radius: 5px;
  word-wrap: break-word;
  overflow-x: auto;
}

.pagination {
  display: flex;
  justify-content: center;
}
  .pagination-container {
    display: flex;
    column-gap: 8px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>