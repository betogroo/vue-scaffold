<script setup lang="ts">
import { version as vuetifyVersion } from 'vuetify'
import { version as vueVersion } from 'vue'
import { useMainStore } from '../store/useMainStore'
const store = useMainStore()
</script>
<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row>
        <v-col>
          <v-img src="@/assets/vue.svg" />
          {{ vueVersion }}
        </v-col>
        <v-col>
          <v-img src="@/assets/logo.png" />
          {{ vuetifyVersion }}
        </v-col>

        <v-col cols="12">
          <div class="text-body-1">Testing Store</div>

          <h5 class="text-h6">
            The HomeView counter value is {{ store.counter }}
          </h5>
        </v-col>
      </v-row>

      <div class="py-14" />
    </v-responsive>
  </v-container>
</template>
