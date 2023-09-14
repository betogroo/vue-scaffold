// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const mainTitle = ref('Home')

  return { mainTitle }
})
