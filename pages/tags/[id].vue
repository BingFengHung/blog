<template>
  <template v-for="(article, idx) in articleLink" :key="article">
    <ArticleCard :articleData="article"></ArticleCard>
  </template>
  <div class="pagination">
    <vue-awesome-paginate
      :total-items="50"
      :items-per-page="5"
      :max-pages-shown="1"
      v-model="currentPage"
      :show-breapoint-buttons="false"
      :show-jump-buttons="true"
      :on-click="onClickHandler"/>
  </div>
</template>

<script setup>
import { marked } from 'marked'
import hljs from 'highlight.js'
import { ref, reactive,onMounted } from 'vue'
import 'highlight.js/styles/github-dark.css';
import convertImageUrl from '~~/utils/convertImageUrl';

let { id: tag } = useRoute().params
tag = tag.replace(' ', '')
console.log(tag)
const articleLink = reactive([])

const currentPage = ref(1);

onMounted(async () => {
  marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        if (language && hljs.getLanguage(language)) {
          return '<div class="hljs">' + hljs.highlight(validLanguage, code).value + '</div>';
        }
        return hljs.highlight(validLanguage, code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
  });

  nextTick(async () => {
    const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')

    data.value = Object.keys(data.value).reduce(((pre, cur) => {
      const dataSet = data.value[cur] = data.value[cur].map(el => {
        el.link = el.link.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')
        el.title = el.title.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')
        return {...el}
      })

      return ({[cur]: dataSet, ...pre})
    }), {})

    data.value['CSharp'] = data.value['C#']
    delete data.value['C#']

    data.value['VCpp'] = data.value['Visual C++']
    delete data.value['Visual C++']

    console.log('data', data.value)

    data.value = data.value[tag]
    data.value = data.value.map(el => ({'group': tag,...el}))
    console.log('e', data.value)
    data.value.forEach(el => {
      articleLink.push(el)
    })


  })
})

const onClickHandler = (page) => {
  const recentData = sortData.slice(6 * (page - 1), 6 + 6 * (page -1))

  articleLink = []

  recentData.forEach(el => {
    articleLink.push(el)
  })
  console.log(articleLink)
};
</script>

<style>
img {
  width: 100%;
}
</style>

<style scoped>
.article {
  padding:  10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%)
}

</style>

