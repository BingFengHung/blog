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
// let tags = reactive({})
const articleStore = useArticleStore()
await articleStore.fetchArticleData()
articleStore.getTags()

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