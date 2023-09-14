<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store/useMainStore'

const store = useMainStore()
const { counter } = storeToRefs(store)
const { increase, decrease } = store
const handleUp = () => {
  increase()
}
const handleDown = () => {
  decrease()
}
const handleReset = () => {
  store.$reset()
}
</script>
<template>
  <v-container class="d-flex justify-center fill-height">
    <v-responsive
      class="text-center"
      max-width="250"
    >
      <h1 class="text-center text-h1">{{ counter }}</h1>
      <div class="d-flex justify-space-around pa-4">
        <v-btn
          color="red"
          :disabled="store.isDisabled"
          @click="handleDown"
          >-</v-btn
        >
        <v-btn
          color="green"
          @click="handleUp"
          >+</v-btn
        >
      </div>
      <v-btn
        block
        color="red"
        @click="handleReset"
        >Reset</v-btn
      >
    </v-responsive>
  </v-container>
</template>
