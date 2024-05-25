import { defineStore } from 'pinia'

export const useCurrentPageStore = defineStore('currentPageStore', {
  state: () => ({
    currentPage: 1,
  }),
  actions: {
    setData(index) {
      this.currentPage = index
    },
  }, 
  getters: { 
  }
}) 