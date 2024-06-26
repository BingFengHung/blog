<template>
  <div>
    <template v-for="(article, index) in articleLink" :key="index">
      <ArticleCard :articleData="article"></ArticleCard>
    </template>

    <div class="example-five">
      <Paginate :items="articleCount" @changePage="onClickHandler" v-model="currentPageStore.currentPage"></Paginate>
    </div>
  </div>
</template>

<script setup>
import 'highlight.js/styles/github-dark.css';
import { ref, reactive, onMounted, computed } from 'vue'
import { useArticleStore } from '../store/articles'
import { useCurrentPageStore } from '../store/currentPage'

const articleLink = reactive([])
let sortData = reactive([])

const articleStore = useArticleStore()
const currentPageStore = useCurrentPageStore()

const getDataByDate = (data) => {
  const dataSet = Object.keys(data).reduce((pre, cur) => {
    const datas = data[cur].map(el => ({ "group": cur, ...el }))
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
    if (!articleStore.isQueryData) await articleStore.fetchArticleData()
    
    let data = articleStore.articleData;

    data = Object.keys(data).reduce(((pre, cur) => {
      const dataSet = data[cur] = data[cur].map(el => {
        return { 
          ...el,
        }
      })

      return ({[cur]: dataSet, ...pre})
    }), {})

    // console.log(data)

    // if (data.hasOwnProperty("C#")) { 
    //   data['CSharp'] = data['C#'] 
    //   delete data['C#']
    // }

    // if (data.hasOwnProperty("Visual C++")) {
    //   data['VCpp'] = data['Visual C++']
    //   delete data['Visual C++']
    // }
    
    sortData = getDataByDate(data)

    updateArticleLink(currentPageStore.currentPage)
})

const updateArticleLink = (page) => {
  const recentData = sortData.slice(6 * (page - 1), 6 * page);
  articleLink.splice(0, articleLink.length, ...recentData)
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const onClickHandler = (page) => { 
  updateArticleLink(page)
  scrollToTop()
};

const articleCount = computed(() => articleStore.articleCount);

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

.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}

.example-five { 
  display: flex;
  justify-content: center;
}

</style>