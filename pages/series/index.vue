<template>
  <div>
    <template v-for="(data, key) in dataSet" :key="key">
      <SeriesCard :articleData="data"></SeriesCard>
    </template>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useArticleStore } from '../../store/articles'
import marked from '../../utils/markedSetup'
import { articleBaseUrl } from '~~/utils/articleBaseUrl'

let dataSet = reactive([])
const articleStore = useArticleStore()

if (!articleStore.isQueryData) await articleStore.fetchArticleData()

const data = articleStore.articleData


const seriesArticles = Object.keys(data).reduce((pre, cur) => {
  const result = data[cur].filter(x => x.isSeries === true)
  
  if (result && result.length !== 0) {
    if (!pre[cur])
      pre[cur] = []
      
    pre[cur].push(result);
  }

  return pre;
}, {});

const seriesGroup = Object.keys(seriesArticles).reduce((pre, cur) => {
  const groupedItems = seriesArticles[cur].reduce((acc, item) => { 
    const group = item.reduce((pre, cur) => {
      const seriesLink = cur.seriesLink;
      if (!pre[seriesLink]) {
        pre[seriesLink] = []
      }

      pre[seriesLink].push(cur);
      return pre;
    }, {});
    const key = Object.keys(group)[0]
    pre.push(group[key])
    return pre;
  }, []);
  

  return groupedItems
}, []);


dataSet.splice(0, dataSet.length);
seriesGroup.forEach(element => {
  dataSet.push(element[0])
});

async function processArticleLink() {
  for (const data of dataSet) {
    const content = await useFetch(`${articleBaseUrl}${data.seriesLink}`)
    data.article = ref('')
    data.article = marked.marked(content.data.value)
    data.formatTitle = data.seriesLink.split('/')[2]; //"/RxJS/RxJS 基本概念/系列文章.md"
  }
}

onMounted(() => { 
  processArticleLink(); 
});

</script>

<style scoped>
/* .container {
  display: block;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%)
}
.timeline {
  border-left: 1px solid #ccc;
  margin-left: 20px;
}
.article {
  position: relative;
  padding-left: 20px;
} */
/* 
.article::before {
  position: absolute;
  content: '';
  background-color: #ccc;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  left: -5px;
} */

/* .datetime {
  margin: 0;
  color: #7a7a7a;
  font-size: 1rem;
}

.datetime + a {
  display: inline-block;
  font-size: 1.2rem;
  text-decoration: none;
  margin-bottom: 5px;
}

.year-tag {
  display: inline-block;
  border-radius: 5px;
  padding: 3px 5px;
  margin-bottom: 10px;
  background-color: #1b9fda;
  color: white;
  cursor: pointer;
} */
</style>