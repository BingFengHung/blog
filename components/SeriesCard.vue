<template>
  <div class="article">
    <div class="title">{{ props.articleData.formatTitle }}</div>
    <details>
      <summary class="category">系列文章</summary>
      <div class="article-content" v-html="article"></div>
    </details>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import convertImageUrl from '../utils/convertImageUrl'
import marked from '../utils/markedSetup'
import { articleBaseUrl } from '~~/utils/articleBaseUrl'

const article = ref('')
const props = defineProps(['articleData'])

const fetchArticle = async (link) => {
  const content = await useFetch(link)
  const imgFormat = convertImageUrl.imageUrlConverter(link, content)
  const result = imgFormat.replace(/##.*(\r?\n)?/g, '');  // remove h2 title
  article.value = marked.marked(result)
}

// 當 prop 改變時更新
watch(() => props.articleData, (newData) => {
  const { seriesLink } = newData
  newData.formatTitle = newData.seriesLink.split('/')[2]; //"/RxJS/RxJS 基本概念/系列文章.md"
  fetchArticle(`${articleBaseUrl}${seriesLink}`)
}, { immediate: true})
</script>

<style scoped>
.article {
  border-radius: 5px;
  overflow: hidden;
  height: auto;
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

.title {
  font-size: 1.5rem;
}

.subtitle {
  font-size: .8rem;
  color: #aaa;
}

.content {
  height: 10%;
  overflow: hidden;
}

.article-content > h2 {
  display: none !important;
}

details {
  cursor: pointer;
}

.category {
  margin: 10px;
}

@media screen and (min-width: 1200px) {
  /* 如果使用者之視窗寬度 >= 1200px，將會再載入這裡的 CSS。 */
}

@media screen and (min-width: 1024px) {
  /*STYLES*/
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