import { defineStore } from 'pinia'
import { reactive, onMounted } from 'vue'

export const useToolsStore = defineStore('toolsStore', () => {
  let toolData: any = reactive({})

  const fetchData = ():any => {
    return new Promise(async (resolve, reject) => {
      const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/tools.json')
      resolve(data)
    })
  }

  onMounted(async () => {
    const data = await fetchData()
    Object.assign(toolData, data.value)
  })

  return {
    toolData
  }
})