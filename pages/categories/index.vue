<template>
  <div class="container">
    <div style="font-weight: bold;">分類</div>
    <div>
      <ul>
        <li v-for="(tag, key) of articleStore.tags" :key="key">
          <NuxtLink :to="`/tags/${tag}`">
            <div class="link"> 
              <div>{{ key }}</div> 
              <div class="count">{{ dataSet[tag] ? dataSet[tag].length : 0 }}</div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useArticleStore } from '../../store/articles'
let dataSet = reactive({})

const articleStore = useArticleStore()

if (!articleStore.articleData) {
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

</script>

<style scoped>
.container {
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%)
}

ul {
  padding: 2px 15px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
  border-radius: 5px;
}

li:hover {
  background-color: #eee;
}

.count {
  background-color: #eee;
  border-radius: 5px;
  padding: 5px;
}

.link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px;
}


li a  {
  width: 100%;
  text-decoration: none;
  font-size: 1.1rem;
  color: #007bff;
}
</style>