<template>
  <div class="article">
    <div class="subtitle">更新日期：{{ modifyDate  }}</div>
    <div class="content" v-html="article"></div>
    <NuxtLink :to="`/articles/${group}_${title}`">
      <div>繼續閱讀</div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import convertImageUrl from '../utils/convertImageUrl'
import marked from '../utils/markedSetup'

const article = ref('')
const modifyDate = ref('')
const { articleData } = defineProps(['articleData'])
const { group, title, link, lastModifyDate } = articleData

modifyDate.value = lastModifyDate

onMounted(async () => {
  const articles = await useFetch(link)
  const temp = convertImageUrl.imageUrlConverter(link, articles)
  article.value = marked.marked(temp)
})
</script>

<style>
img {
  width: 100%;
}
</style>

<style scoped>
.article {
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  overflow: hidden;
  height: 300px;
  margin-bottom: 10px;
  padding: 5px 20px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%)
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

button {
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
  .article {
    
  }
}
</style>