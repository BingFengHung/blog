<template>
  <div class="article">
    <div>{{ describe }}</div>
    <div v-html="article"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import convertImageUrl from '~~/utils/convertImageUrl';
import marked from '../../utils/markedSetup';
import { addCopyButtons } from '~~/utils/addCopyButtons';
import { useArticleStore } from '~~/store/articles';

const article = ref('')
const { id } = useRoute().params
const { describe } = ref('')

let [ group, title ] = id.split('<_>>')

const articleStore = useArticleStore()

onMounted(async () => {
  await nextTick(async () => {
    if (!articleStore.articleData) await articleStore.fetchArticleData()
    
    let data = articleStore.articleData;
    
    data = Object.keys(data).reduce((pre, cur) => {
      const dataSet = data[cur].map(el => {
      const url = el.link
      const parseUrl = new URL(url)
      const baseUrl = `${parseUrl.protocol}//${parseUrl.host}`
      const rawPath = url.replace(baseUrl, '')
      let decodedPath = rawPath.split('/').map(decodeURIComponent).join('/');
      let encodedPath = decodedPath.split('/').map(encodeURIComponent).join('/');
      let fullUrl = `${baseUrl}${encodedPath}`;

      return {
        ...el,
        link: fullUrl, //mylink, //el.link,//el.link.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B'), 
        title: el.title
      }})  
      return ({ [cur]: dataSet, ...pre }) 
    })
    
    if (data.hasOwnProperty("C#")) { 
      data['CSharp'] = data['C#'] 
      delete data['C#']
    }

    if (data.hasOwnProperty("Visual C++")) {
      data['VCpp'] = data['Visual C++']
      delete data['Visual C++']
    }


    const result = data[group].filter(el => el.title == title)
    
    if (result.length > 0) { 
      const articles = await useFetch(result[0].link) 
      const temp = convertImageUrl.imageUrlConverter(result[0].link, articles) 
      article.value = marked.marked(temp)
    }
  })

  //addCopyButtons('.hljs.my-code');
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

