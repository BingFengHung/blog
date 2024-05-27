import { defineStore } from 'pinia'
import { reactive, onMounted } from 'vue'

export const useToolsStore = defineStore('toolsStore', () => {
  let toolData: any = reactive({})

  const fetchData = async () => {
      return await useFetch('https://bingfenghung.github.io/DevArticles/tools.json')
  }

  onMounted(async () => {
    const tools = await fetchData()
    Object.assign(toolData, tools.data.value)
  })

  return {
    toolData
  }
})