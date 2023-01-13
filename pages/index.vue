<template>
  <div>
    <template v-for="(article, idx) in articleLink" :key="idx">
      <ArticleCard :group="article.group" :title="article.title" :link="article.link"></ArticleCard>
    </template>
    <vue-awesome-paginate
    :total-items="50"
    :items-per-page="5"
    :max-pages-shown="5"
    v-model="currentPage"
    :show-breapoint-buttons="false"
    :show-jump-buttons="true"
    :on-click="onClickHandler"
  />
  </div>
</template>

<script setup>
import { marked } from 'marked'
import hljs from 'highlight.js'
import { ref, onMounted } from 'vue'
import 'highlight.js/styles/github-dark.css';

const article = ref('')
const articleLink = reactive([])
const onClickHandler = (page ) => {
  };

  const currentPage = ref(1);

const getDataByDate = (data) => {
  const dataSet = Object.keys(data).reduce((pre, cur) => {
    const datas = data[cur].map(el => ({"group": cur, ...el}))
    return pre.concat(datas)
  }, [])
  return dataSet.sort((a, b) => {
    const splitA = a.lastModifyDate.split('-')
    const splitB = b.lastModifyDate.split('-')

    const date1 = new Date(...splitA)
    const date2 = new Date(...splitB)
    return date1 - date2
  })
}

onMounted(async () => {
  // marked.setOptions({
  //   langPrefix: 'hljs language-',
  //   highlight: function(code) {
  //     return hljs.highlightAuto(code, ["html", "javascript"]).value;
  //   }
  // })
  marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        if (language && hljs.getLanguage(language)) {
          return '<div class="hljs">' + hljs.highlight(validLanguage, code).value + '</div>';
        }
        return hljs.highlight(validLanguage, code).value;
      },
      // highlight: function (code, language) {
      //   const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      //   return hljs.highlight(validLanguage, code).value;
      // },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });

  // const data  = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')


  nextTick(async () => {
    const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')

    const sortData = getDataByDate(data.value)

    const recentData = sortData.slice(0, 6)

    recentData.forEach(el => {
      articleLink.push(el)
    })
  })
})

Array.prototype.asyncForEach = async function(callback) {
  for (let i = 0; i < this.length; i++) {
    await callback(this[i], i, this)
  }
}


</script>

<style>
.hljs {
  padding: 15px;
  border-radius: 5px;
}

  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>