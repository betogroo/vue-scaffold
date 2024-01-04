<script setup lang="ts">
import { version as vuetifyVersion } from 'vuetify'
import { version as vueVersion } from 'vue'
</script>

<template>
  <v-row>
    <v-col>
      <v-img src="@/assets/vue.svg" />
      {{ vueVersion }}
    </v-col>
    <v-col>
      <v-img src="@/assets/logo.png" />
      {{ vuetifyVersion }}
    </v-col>
  </v-row>
</template>
