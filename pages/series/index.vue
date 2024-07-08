<template>
  <template v-for="(data, index) in dataSet" :key="index">
    <SeriesCard :articleData="data"></SeriesCard>
  </template>
</template>

<script setup>
import { reactive } from 'vue'
import { useArticleStore } from '../../store/articles'

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
</script>

<style scoped>
</style>