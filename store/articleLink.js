import { defineStore } from 'pinia'

export const useArticleLinkStore = defineStore('articleLink', {
  state: () => ({
    h1Contents: [],
    h2Contents: [],
  }),
  actions: {
    setH1Contents(el) {
      this.h1Contents = el
    },
    setH2Contents(el) {
      this.h2Contents = el
    }
  }
})