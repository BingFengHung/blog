<template>
  <div class="article">
    <div class="subtitle">更新日期：{{ modifyDate  }}</div>
    <div class="content" v-html="article"></div>
    <NuxtLink class="read-more" :to="linkTo">
      <span>繼續閱讀...</span>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import convertImageUrl from '../utils/convertImageUrl'
import marked from '../utils/markedSetup'

const article = ref('')
const linkTo = ref('')
const modifyDate = ref('')
const props = defineProps(['articleData'])

const { group, title, link } = props.articleData

const fetchArticle = async (link) => {
  const articles = await useFetch(link)
  const temp = convertImageUrl.imageUrlConverter(link, articles)
  article.value = marked.marked(temp)
}

// 當 prop 改變時更新
watch(() => props.articleData, (newData) => {
  const { group, title, link, lastModifyDate } = newData
  modifyDate.value = lastModifyDate
  fetchArticle(link)
  const newTitle = encodeURIComponent(title)
  linkTo.value = `/articles/${group}<_>>${newTitle}`
}, { immediate: true})


onMounted(() => {
  fetchArticle(link)
})
</script>

<style>
img {
  width: 100%;
}
</style>

<style scoped>
.read-more {
  background-color: #007bff;
  color: #fff;
  box-sizing: border-box;
  margin: 1px;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  padding: 3px 5px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  position: absolute;
  right: 10px;
}

.read-more:hover {
  background-color: #0056b3;
}

.article {
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  overflow: hidden;
  height: 320px;
  margin-bottom: 10px;
  padding: 5px 20px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%);
  position: relative;
}

img {
  width: 100%;
}

.subtitle {
  font-size: .8rem;
  color: #aaa;
}

.content {
  height: 80%;
  overflow: hidden;
}

.content h1 {
  margin: 5px 0px !important;
}

@media screen and (min-width: 1024px) {
  /*STYLES*/
}

@media screen and (min-width: 1200px) {
  /* 如果使用者之視窗寬度 >= 1200px，將會再載入這裡的 CSS。 */
}

@media screen and (min-width: 768px) and (max-width: 979px) {
  /* 如果使用者之視窗寬度介於 768px ~ 979px，將會再載入這裡的 CSS。 */
}

@media screen and (max-width: 767px) {
  /* 如果使用者之視窗寬度 <= 768px，將會再載入這裡的 CSS。*/
}

@media screen and (max-device-width: 480px) {
  /* 如果使用者之裝置寬度 <= 480px，將會再載入這裡的 CSS。 */
}
</style>