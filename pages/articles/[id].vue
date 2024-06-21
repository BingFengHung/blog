<template>
  <div class="article">
    <div>{{ describe }}</div>
    <div v-html="article"></div>
  </div>
  <div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import convertImageUrl from '~~/utils/convertImageUrl';
import marked from '../../utils/markedSetup';
import { addCopyButtons } from '~~/utils/addCopyButtons';
import { useArticleStore } from '~~/store/articles';

definePageMeta({
  layout: 'article'
})

const article = ref('')
const { id } = useRoute().params
const { describe } = ref('')

let [ group, title ] = id.split('<_>>')

const articleStore = useArticleStore()


onMounted(async () => {
  await nextTick(async () => {
    if (!articleStore.isQueryData) await articleStore.fetchArticleData()
    let data = articleStore.articleData;
    console.log(`id`, data, group)

    const result = data[group].filter(el => el.title == title)
    
    if (result.length > 0) { 
      const articleLink = result[0].link
      const articles = await useFetch(articleLink)
      const content = convertImageUrl.imageUrlConverter(articleLink, articles) 
      article.value = marked.marked(content)
    }
  })

  addCopyButtons('pre code');
})
</script>

<style>
.plaintext {
  white-space: pre-wrap;
  word-break: break-word;
}
</style>

<style scoped>
img {
  width: 100%
}

.article {
  padding:  10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%)
}


</style>

