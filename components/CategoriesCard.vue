<template>
  <div class="categories">
    <div class="categories__title">標籤</div>
    <ul class="categories__list">
      <li v-for="(tag, key) of articleStore.tags" :key="key" v-show="dataSet[tag] && dataSet[tag].length !== 0"> 
        <font-awesome-icon icon="fa-solid fa-tag" class="tag-icon"/> 
        <NuxtLink :to="`/tags/${tag}`" @click="refreshPaginateIndex">{{ key }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useArticleStore } from '../store/articles'
import { useCurrentPageStore } from '../store/currentPage'

let dataSet = reactive({})

const articleStore = useArticleStore()
const currentPageStore = useCurrentPageStore()


if (!articleStore.isQueryData) {
  await articleStore.fetchArticleData()
  articleStore.getTags()
} 

const data = articleStore.articleData

if (data.hasOwnProperty("C#")) { 
  data['CSharp'] = data['C#'] 
  delete data['C#']
}

if (data.hasOwnProperty("Visual C++")) {
  data['VCpp'] = data['Visual C++']
  delete data['Visual C++']
}

dataSet = data

const refreshPaginateIndex = () => currentPageStore.setData(1)
</script>

<style scoped>
.categories {
  display: inline-block;
  /* border: 1px solid #ccc;; */
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%)
}

.categories__title {
  font-weight: bold;
  margin-top: 10px;
}

.categories__list {
  padding: 0px;
  margin: 10px;
}

.categories__list li {
  list-style-type: none;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 1.1rem;
}

.tag-icon {
  color: #555;
}

a {
  color: #007bff;
  text-decoration: none;
  margin-left: 5px;
}

a:hover {
  color: #0056b3;
  font-weight: 300;
}

a:visited {
  color: #007bff;
}
</style>