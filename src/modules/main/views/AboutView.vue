<script setup lang="ts">
import { AppVersion } from '../components'
import { useMainStore } from '../store/useMainStore'
const store = useMainStore()
</script>
<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <AppVersion />
      <v-col cols="12">
        <div class="text-body-1">Testing Store</div>

        <h5 class="text-h6">
          The HomeView counter value is {{ store.counter }}
        </h5>
      </v-col>

      <div class="py-14" />
    </v-responsive>
  </v-container>
</template>
