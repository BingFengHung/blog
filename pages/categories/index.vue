<template>
  <div class="container">
    <div>分類</div>
    <div>
      <ul>
        <li v-for="(tag, key) of articleStore.tags" :key="key">
          <NuxtLink :to="`/tags/${tag}`">
            <div class="link"> 
              <div>{{ key }}</div> 
              <div class="count">{{ dataSet[tag].length }}</div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { useArticleStore } from '../../store/articles'
let tags = reactive({})
let dataSet = reactive({})

const articleStore = useArticleStore()
await articleStore.fetchArticleData()
articleStore.getTags()
console.log(`tga`, articleStore.tags)
console.log(articleStore.articleData)

const data = articleStore.articleData
data['CSharp'] = data['C#']
delete data['C#']

data['VCpp'] = data['Visual C++']
delete data['Visual C++']
console.log(data)

dataSet = data
console.log('dataSet', dataSet)

</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
}
ul {
  padding: 2px 15px;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
}

li:hover {
  background-color: #ccc;
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
  padding: 5px 20px;
}

a {
  width: 100%;
}
</style>