<script setup lang="ts">
import { computed, ref } from 'vue'
import { SignupForm } from '../components'
import type { User } from '../types/Main'
import { useHelpers } from '@/shared/composables'

const { delay } = useHelpers()
const isPending = ref(false)
const userData = ref<User>()

const signupUser = async (data: User) => {
  isPending.value = true
  await delay(2000)
  console.log(data)
  userData.value = data
  isPending.value = false
}

const gender = computed(() => {
  switch (userData.value?.gender) {
    case 'M':
      return 'Masculino'
    case 'F':
      return 'Feminino'
    default:
      return ''
  }
})
</script>

<template>
  <v-container>
    <div class="d-flex flex-wrap justify-center pa-0">
      <v-card
        class="pa-2 ma-2"
        :disabled="isPending"
        max-width="340"
        variant="outlined"
      >
        <SignupForm
          :is-pending="isPending"
          @handle-submit="(data) => signupUser(data)"
        />
      </v-card>
      <v-card
        class="pa-2 ma-2"
        :loading="isPending"
        title="Dados do Formulário"
        variant="outlined"
        width="340"
      >
        <v-card-text>
          <v-list>
            <v-list-item
              prepend-icon="mdi-account"
              :title="userData?.full_name"
            />
            <v-list-item
              prepend-icon="mdi-email"
              :title="userData?.email"
            />
            <v-list-item
              :prepend-icon="
                userData?.gender === 'M'
                  ? 'mdi-gender-male'
                  : 'mdi-gender-female'
              "
              :title="gender"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>
