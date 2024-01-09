<script setup lang="ts">
import { ref } from 'vue'
import { SignupForm } from '../components'
import type { User } from '../types/Main'
import { useHelpers } from '@/shared/composables'

const { delay } = useHelpers()
const isPending = ref(false)

const signupUser = async (data: User) => {
  isPending.value = true
  await delay(5000)
  console.log(data)
  isPending.value = false
}
</script>

<template>
  <v-container>
    <v-card
      class="pa-2 ma-2"
      :disabled="isPending"
      :loading="isPending"
      max-width="400"
      variant="outlined"
    >
      <SignupForm
        :is-pending="isPending"
        @handle-submit="(data) => signupUser(data)"
      />
    </v-card>
  </v-container>
</template>
