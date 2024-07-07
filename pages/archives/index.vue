<template>
  <div>
    <div v-for="(data, key) in timelineData" class="container">
      <div class="year-tag">{{ data.year }}</div>
      <div class="timeline" v-for="time in data.data" :key="time.title">
        <div class="article">
          <p class="datetime">{{ time.lastModifyDate }}</p>
          <NuxtLink :to="`articles/${time.group}<_>>${time.realTitle}`">{{ time.title }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useArticleStore } from '../../store/articles'
let timelineData = reactive([])
const articleStore = useArticleStore()

if (!articleStore.isQueryData) await articleStore.fetchArticleData()

const data = articleStore.articleData

const getDataByDate = (data) => {
  const dataSet = Object.keys(data).reduce((pre, cur) => {
    const datas = data[cur].map(el => ({
      "group": cur, 
      "realTitle": [el.title].map(decodeURIComponent).map(encodeURIComponent)[0],//.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B').replaceAll('/', '%2f'),
      ...el
    }))
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

const sortData = getDataByDate(data)

let groupWithTime = sortData.reduce((pre, cur) => {
  const year = cur.lastModifyDate.split('-')[0]
  if (year in pre) {
    pre[year].push(cur)
  } else {
    pre[year] = [cur]
  }

  return pre
}, {})

const keysSorted = Object.keys(groupWithTime).sort(function(a,b){return b-a})

const arr = [];
// Adding the sorted result to an array of object
for (let i = 0; i < keysSorted.length; i++) {
  const obj = {};
  obj.year= keysSorted[i];
  obj.data= groupWithTime[keysSorted[i]];
  arr.push(obj);
}

timelineData = arr
</script>

<style scoped>
.container {
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
}

.article::before {
  position: absolute;
  content: '';
  background-color: #ccc;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  left: -5px;
}

.datetime {
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
}
</style>