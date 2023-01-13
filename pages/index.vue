<template>
  <div>
    <!-- <div v-html="article"></div> -->
    <!-- <NuxtLink to="/articles/node">Temp</NuxtLink> -->
    <!-- <Profile></Profile> 
    <CategoriesCard></CategoriesCard> -->
    <template v-for="(link, idx) in articleLink" :key="idx">
      <ArticleCard :link="link"></ArticleCard>
    </template>
    <!-- <ArticleCard link="https://bingfenghung.github.io/Articles/CSharp/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A.md"></ArticleCard> -->
    <!-- <ArticleCard link="https://bingfenghung.github.io/Articles/CSharp/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A.md"></ArticleCard> -->
    <!-- <ArticleCard link="https://bingfenghung.github.io/Articles/CSharp/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A.md"></ArticleCard>
    <ArticleCard link="https://bingfenghung.github.io/Articles/CSharp/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A.md"></ArticleCard> -->
  </div>
</template>

<script setup>
import { marked } from 'marked'
import hljs from 'highlight.js'
import { ref, onMounted } from 'vue'
import 'highlight.js/styles/github-dark.css';

const article = ref('')
const articleLink = reactive([])

const getDataByDate = (data) => {
  console.log(data)
  const dataSet = Object.keys(data).reduce((pre, cur) => pre.concat(data[cur]), [])
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

  // console.log(data)

  nextTick(async () => {
    const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')
    // console.log(data)

    // console.log('Art', data)
    const sortData = getDataByDate(data.value)
    // console.log(sortData)

    const recentData = sortData.slice(0, 6)
    // // console.log(recentData)

    recentData.forEach(el => {
      articleLink.push(el.link)
    })

    // await recentData.asyncForEach(async (item) => {
    //   // const { data: record } = await useFetch(item.link);
    //   // console.log('a',record)
    //   console.log('link', item.link)
    //   articeLink.push(item.link)
    // })
  })

  // const articles = await useFetch(data.value['Node.js'][0].link)
  // console.log(articles)
  // const articles = await useFetch("https://bingfenghung.github.io/Articles/CSharp/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A/CSharp_%E5%AF%A6%E4%BD%9CEventAggregator%E5%AF%A6%E7%8F%BE%E5%85%A9%E7%89%A9%E4%BB%B6%E4%B9%8B%E9%96%93%E7%9A%84%E6%BA%9D%E9%80%9A.md")
  // console.log(articles.data.value)

  // article.value = marked(articles.data.value)
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
</style>