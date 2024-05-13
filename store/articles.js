import { defineStore } from 'pinia'

export const useArticleStore = defineStore('articleStore', {
  state: () => ({
    articleData: null,
    tags: null,
  }),
  actions: {
    async fetchArticleData() {
      return new Promise(async (resolve, reject) => {
        const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')
        this.articleData = data
        resolve(data)
      })
    },
    setData(data) {
      this.articleData = data
    },
    getTags() {
      const data = this.articleData
      const tag = Object.keys(data).reduce((pre, cur) => {
        const current = data[cur].reduce((pre, cur) => {
          const obj = cur.tags.reduce((pre, cur) => {
            let obj = { [cur]: 0 }
            return {...obj, ...pre}
          }, {})

          return {...obj, ...pre}
        }, {})
        return {...current, ...pre}
      }, {})

    const tagKey = Object.keys(tag).map(el => el).reduce((pre, cur)=> {
      let obj = {}
      if (cur === 'Visual C++')  {
        obj = { [cur]: 'VCpp' }
      } else if (cur === 'C#') {
        obj = { [cur]: 'CSharp' }
      } else if (cur === 'Visual Studio') {
        obj = { [cur]: 'VisualStudio' }
      } else if (cur === 'Unit Test') {
        obj = { [cur]: 'UnitTest' }
      }else {
        obj = { [cur]: cur }
      }
      return { ...obj, ...pre }
    }, {})

    // 將標籤數量為 0 的項目清除
    for(var key in tagKey[i]) { 
      if(tagKey[key] === "0") delete tagKey[key];
    } 
    
    this.tags = tagKey 
  }
  },
  getters: {

  }
}) 