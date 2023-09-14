<script setup lang="ts">
import { useMainStore } from '../store/useMainStore'
const store = useMainStore()
</script>
<template>
  <h1 class="text-center">{{ store.mainTitle }}</h1>
</template>
