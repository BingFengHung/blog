<template>
  <div>
    <div v-for="(data, key) in timelineData" class="container">
      <div>{{ data.year }}</div>
      <div class="timeline" v-for="time in data.data" :key="time.title">
        <div class="article">
          <p class="datetime">{{ time.lastModifyDate }}</p>
          <NuxtLink :to="`articles/${time.group}_${time.realTitle}`">{{ time.title }}</NuxtLink>
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
await articleStore.fetchArticleData()

console.log('Article: ', articleStore.articleData)
Object.keys(articleStore.articleData).forEach(el => console.log(el))
const data = Object.keys(articleStore.articleData).reduce((pre, cur) => {
  const target = articleStore.articleData
  const dataSet = target[cur].map(el => {
    el.realLink = el.link.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')
    el.realTitle = el.title.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')
    return {...el}
  })

  return ({[cur]: dataSet, ...pre})
}, {})

data['CSharp'] = data['C#']
delete data['C#']

data['VCpp'] = data['Visual C++']
delete data['Visual C++']


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

const sortData = getDataByDate(data)
console.log('sortData', sortData)

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
for (let i=0; i<keysSorted.length;i++) {
  const obj = {};
  obj.year= keysSorted[i];
  obj.data= groupWithTime[keysSorted[i]];
  arr.push(obj);
}
console.log(arr)

timelineData = arr//groupWithTime

</script>

<style scoped>
.container {
  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
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
</style>