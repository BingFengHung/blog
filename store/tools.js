import { defineStore } from 'pinia'
import { onMounted } from 'vue'

export const useToolsStore = defineStore('toolsStore', () => {
  const toolData = reactive([])

  const fetchData = () => {
    return new Promise(async (resolve, reject) => {
      const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/tools.json')
      resolve(data)
    })
  }

  onMounted(async () => {
    const data = await fetchData()
      const mapData = Object.keys(data.value).map(el => {
        const obj =  {'group': el, ...data.value[el]}
        return obj
      })

      console.log(mapData)
      Object.assign(toolData, mapData)
  })

  return {
    toolData
  }
})