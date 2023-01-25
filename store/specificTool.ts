// 取得指定工具

import { defineStore } from 'pinia'
import { reactive, onMounted } from 'vue'

const baseUrl = "https://bingfenghung.github.io/DevArticles/Tools";

export const useSpecificToolStore = defineStore('specificToolStore', () => {
    let toolData: any = reactive([])

    const fetchData = (url: string): any => {
      return new Promise(async (resolve, reject) => {
        const { data } = await useFetch(`${baseUrl}/${url}/link.json`)
        while(toolData.length != 0)
          toolData.pop()

        Object.assign(toolData, data.value)
        resolve(data)
      })
    }

    return {
      toolData,
      fetchData
    }
  })