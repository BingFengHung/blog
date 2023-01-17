<template>
  <div class="categories">
    <div class="categories__title">標籤</div>
    <ul class="categories__list">
      <li v-for="(tag, key) of articleStore.tags" :key="key">
          <font-awesome-icon icon="fa-solid fa-tag" class="tag-icon"/>
          <NuxtLink :to="`/tags/${tag}`">{{ key }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { useArticleStore } from '../store/articles'
let tags = reactive({})
const articleStore = useArticleStore()
await articleStore.fetchArticleData()
articleStore.getTags()

// onMounted(() => {
//   nextTick(async () => {
//     const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')
//     // const data = useArticleStore.articleData
//     const tag = Object.keys(data.value).reduce((pre, cur) => {
//       const current = data.value[cur].reduce((pre, cur) => {
//         const obj = cur.tags.reduce((pre, cur) => {
//           let obj = { [cur]: 0 }
//           return {...obj, ...pre}
//         }, {})

//         return {...obj, ...pre}
//       }, {})
//       return {...current, ...pre}
//     }, {})

//     const tagKey = Object.keys(tag).map(el => el).reduce((pre, cur)=> {
//       let obj = {}
//       if (cur === 'Visual C++')  {
//         obj = { [cur]: 'VCpp' }
//       } else if (cur === 'C#') {
//         obj = { [cur]: 'CSharp' }
//       } else if (cur === 'Visual Studio') {
//         obj = { [cur]: 'VisualStudio' }
//       } else {
//         obj = { [cur]: cur }
//       }
//       return { ...obj, ...pre }
//     }, {})

//     Object.assign(tags, tagKey)

//     useArticleStore.tags
//   })
// })
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
  color: gray;
}

a {
  text-decoration: none;
  margin-left: 5px;
}
</style>