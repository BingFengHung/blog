import { defineStore } from 'pinia'
import { articleBaseUrl } from '~~/utils/articleBaseUrl'

function getArticleCount() {
  const data = this.articleData
  this.articleCount = Object.keys(data).reduce((pre, cur) => {
    pre += data[cur].length
    return pre
  }, 0)
}

function convertLinkURL(url) {
    const parseUrl = new URL(url)
    const baseUrl = `${parseUrl.protocol}//${parseUrl.host}`
    const rawPath = url.replace(baseUrl, '')
    let decodedPath = rawPath.split('/').map(decodeURIComponent).join('/');
    let encodedPath = decodedPath.split('/').map(encodeURIComponent).join('/');
    let fullUrl = `${baseUrl}${encodedPath}`;
  return fullUrl
}

function handleArtcileData() {
  const data = this.articleData
  
  this.articles = Object.keys(data).reduce((pre, cur) => {
    const dataSet = data[cur].map(el => {
    return {
      ...el,
      link: convertLinkURL(el.link),
    }})
    return ({ [cur]: dataSet, ...pre }) 
  }, {})
  
  if (data.hasOwnProperty("C#")) { 
    data['CSharp'] = data['C#'] 
    delete data['C#']
  }

  if (data.hasOwnProperty("Visual C++")) {
    data['VCpp'] = data['Visual C++']
    delete data['Visual C++']
  }
}

export const useArticleStore = defineStore('articleStore', {
  state: () => ({
    isQueryData: false,
    articleData: null,
    tags: null,
    articleCount: 0,
    currentPage: 1,
    articles: null,
    fetchPromise: null
  }),
  actions: {
    async fetchArticleData() {
      if (!this.fetchPromise) {
        this.fetchPromise = (async () => {
          this.isFetching = true;
          try {
            // 模擬 fetch 資料的操作 
            const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')        
            Object.keys(data.value).forEach(key => data.value[key].forEach(el => { 
              const link = el.link 
              el.link = `${articleBaseUrl}${link}` 
            })) 
            
            this.articleData = data
            getArticleCount.call(this)
            handleArtcileData.call(this)
            this.isQueryData = true;
          } finally {
            this.isFetching = false;
            this.fetchPromise = null;
          }
        })();
      }

      return this.fetchPromise;
    },
    getTags() {
      const data = this.articleData

      const tag = Object.keys(data).reduce((pre, cur) => {
        const current = data[cur].reduce((pre, cur) => {
          const obj = cur.tags.reduce((pre, cur) => {
            let obj = { [cur]: 0 }
            return { ...obj, ...pre }
          }, {})

          return {...obj, ...pre }
        }, {})
        return {...current, ...pre }
      }, {})
      
      const tagKeyMap = {
        'Visual C++': 'VCpp',
        'C#': 'CSharp',
        'Visual Studio': 'VisualStudio',
        'Unit Test': 'UnitTest'
      }
      
      const tagKey = Object.keys(tag).reduce((pre, cur) => {
        const key = tagKeyMap[cur] || cur;
        return { ...pre, [cur]: key}
      }, {})

      this.tags = tagKey 
    } 
  }, 
  getters: { 
  }
}) 