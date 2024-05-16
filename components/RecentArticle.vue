<template>
  <div class="profile">
    <div>近期文章:</div>
    <ul>
      <li v-for="(data, key) in timelineData" :key="key">
        <NuxtLink :to="`/articles/${data.group}_${data.realTitle}`" :key="key">{{ data.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useArticleStore } from '../store/articles'

let timelineData = reactive([])

const articleStore = useArticleStore()
await articleStore.fetchArticleData()

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

console.log(data)

const getDataByDate = (data) => {
  const dataSet = Object.keys(data).reduce((pre, cur) => {
    const datas = data[cur].map(el => ({ "group": cur, ...el }))
    return pre.concat(datas)
  }, [])
  return dataSet.sort((a, b) => {
    const splitA = a.lastModifyDate.split('-')
    const splitB = b.lastModifyDate.split('-')

    return  new Date(...splitB) - new Date(...splitA)
  })
}

const sortData = getDataByDate(data)


// 取得前 10 筆資料

timelineData = sortData.slice(0, 10);//groupWithTime

console.log(timelineData)
</script>

<style scoped>
.profile {
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%)
}

.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  border-radius: 50%;
  width: 50%;
  height: 50%;
}

.bio {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 10px;
  font-weight: 600;
}

.links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.links a {
  color: black;
}

.menu {
  display: flex;
  justify-content: space-between;
}

ul.menu {
  padding: 0px;
  margin: 5px 15px 5px;
}

.menu li {
  list-style-type: none;
  text-align: center;
}

.menu li p:nth-child(1) {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
