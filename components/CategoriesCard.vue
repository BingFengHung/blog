<template>
  <div class="categories">
    <div class="categories__title">標籤</div>
    <ul class="categories__list">
      <li v-for="(tag) in tags">
          <font-awesome-icon icon="fa-solid fa-tag" class="tag-icon"/> {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
const  tags  = ref([])
onMounted(() => {
  nextTick(async () => {
    const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')
    const tag = Object.keys(data.value).reduce((pre, cur) => {
      const current = data.value[cur].reduce((pre, cur) => {
        const obj = cur.tags.reduce((pre, cur) => {
          let obj = { [cur]: 0 }
          console.log('obj', obj)
          return {...obj, ...pre}
        }, {})

        return {...obj, ...pre}
      }, {})
      return {...current, ...pre}
    }, {})

    tags.value = Object.keys(tag).map(el => el)
  })
})
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
</style>