// Utilities
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const counter = ref<number>(0)
  const increase = () => {
    counter.value++
  }
  const decrease = () => {
    counter.value--
  }
  const $reset = () => {
    counter.value = 0
  }
  const isDisabled = computed(() => {
    return counter.value < 1 ? true : false
  })
  return { counter, isDisabled, $reset, increase, decrease }
})
