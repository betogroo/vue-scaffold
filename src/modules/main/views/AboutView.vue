<script setup lang="ts">
import { useMainStore } from '../store/useMainStore'
const store = useMainStore()
</script>
<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img
        height="300"
        src="@/assets/logo.svg"
      />
      <h5 class="text-h2 font-weight-bold">Vuetify</h5>
      <h5 class="text-h6">The HomeView counter value is {{ store.counter }}</h5>
      <div class="py-14" />
    </v-responsive>
  </v-container>
</template>
