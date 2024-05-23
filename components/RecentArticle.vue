<template>
  <div class="box">
    <div class="title">近期文章:</div>
    <div class="link" v-for="(data, key) in timelineData" :key="key">
      <NuxtLink :to="`/articles/${data.group}<_>>${data.realTitle}`" :key="key">
        <div>
          <span>{{ data.title }}</span>
          <span class="link__time">({{ data.lastModifyDate }})</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useArticleStore } from '../store/articles'

let timelineData = reactive([])

const articleStore = useArticleStore()

if (!articleStore.articleData) await articleStore.fetchArticleData()

const data = Object.keys(articleStore.articleData).reduce((pre, cur) => {
  const target = articleStore.articleData
  const dataSet = target[cur].map(el => {
    el.realLink = el.link.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')
    el.realTitle = el.title.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')
    return { ...el }
  })

  return ({[cur]: dataSet, ...pre})
}, {})

data['CSharp'] = data['C#']
delete data['C#']

data['VCpp'] = data['Visual C++']
delete data['Visual C++']

const getDataByDate = (data) => {
  const dataSet = Object.keys(data).reduce((pre, cur) => {
    if (data[cur]) {
      const datas = data[cur].map(el => ({ "group": cur, ...el }))
      return pre.concat(datas)
    } else return pre
  }, [])
  return dataSet.sort((a, b) => {
    const splitA = a.lastModifyDate.split('-')
    const splitB = b.lastModifyDate.split('-')

    return  new Date(...splitB) - new Date(...splitA)
  })
}

const sortData = getDataByDate(data)


// 取得前 10 筆資料

timelineData = sortData?.slice(0, 10);//groupWithTime
</script>

<style scoped>
.box {
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%)
}

.title {
  font-weight: bold;
}

.box a {
  text-decoration: none;
  list-style: none;
}

.link {
  margin: 6px 5px;
  font-size: 1rem;
}
    
.link__time {
  font-size: 0.7rem;
  color: #333;
  text-align: justify;
  margin-left: 5px;
}
    
.link a:hover {
  text-decoration: underline;
}
    
.link a:visited {
  color: #007bff
}

</style>