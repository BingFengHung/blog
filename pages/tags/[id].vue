<template>
  <template v-for="(article, idx) in articleLink" :key="idx">
    <ArticleCard :articleData="article"></ArticleCard>
  </template>
  <div class="pagination">
    <Paginate :items="totalArticleCount" @changePage="onClickHandler" 
              v-model="currentPageStore.currentPage"></Paginate>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useArticleStore } from '~~/store/articles'
import { useCurrentPageStore } from '~~/store/currentPage'

let { id: tag } = useRoute().params
tag = tag.replace(' ', '')

let articleLink = reactive([])
let sortData = reactive([])
const totalArticleCount = ref(0)
const currentPageStore = useCurrentPageStore()

const parseDate = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day)
}
const getDataByDate = (data) => {
  return data.sort((a, b) => {
    const date1 = parseDate(a.lastModifyDate);
    const date2 = parseDate(b.lastModifyDate);
    return date2 - date1
  });
}

const articleStore = useArticleStore()

onMounted(async () => {
  if (!articleStore.isQueryData) await articleStore.fetchArticleData();
  
  let data = articleStore.articleData;
  
  data = data[tag]
  data = data.map(el => ({ 'group': tag, ...el }))
  totalArticleCount.value = data.length
  sortData = getDataByDate(data)
  
  updateArticleLink(currentPageStore.currentPage)
})

const updateArticleLink = (page) => {
  const recentData = sortData.slice(6 * (page - 1), 6 * page);
  articleLink.splice(0, articleLink.length, ...recentData)
}

const onClickHandler = (page) => {
  updateArticleLink(page);
  scrollToTop();
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style>
/* img {
  width: 100%;
} */
</style>

<style scoped>
.article {
  padding:  10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%)
}

</style>

