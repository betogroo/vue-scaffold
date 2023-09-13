<script setup lang="ts">
import AppBar from './components/AppBar.vue'
</script>
<template>
  <v-app>
    <AppBar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
