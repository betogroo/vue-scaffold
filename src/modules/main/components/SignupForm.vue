<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { type User, validationUserSchema } from '../types/Main'

interface Props {
  isPending?: boolean
}
withDefaults(defineProps<Props>(), {
  isPending: false,
})

const emit = defineEmits<{
  handleSubmit: [values: User]
}>()

const { values, handleSubmit, meta } = useForm<User>({
  validationSchema: validationUserSchema,
})

const full_name = useField('full_name', validationUserSchema)
const email = useField('email', validationUserSchema)
const gender = useField('gender', validationUserSchema)

const onSubmit = handleSubmit(async () => {
  emit('handleSubmit', values)
})
</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-row no-gutters>
      <v-col cols="12">
        <v-text-field
          v-model="full_name.value.value"
          density="compact"
          :error-messages="full_name.errorMessage.value"
          label="Nome"
          placeholder="Digite o seu nome"
          type="text"
          variant="outlined"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="email.value.value"
          density="compact"
          :error-messages="email.errorMessage.value"
          label="Email"
          placeholder="Digite o seu email de cadastro"
          type="email"
          variant="outlined"
        />
      </v-col>
      <v-col cols="12">
        <v-radio-group
          v-model="gender.value.value"
          :error-messages="gender.errorMessage.value"
          inline
        >
          <v-radio
            label="Masculino"
            value="M"
          ></v-radio>
          <v-radio
            label="Feminino"
            value="F"
          ></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12">
        <v-btn
          block
          color="primary"
          :disabled="!meta.valid"
          :loading="isPending"
          type="submit"
          >Cadastrar</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>
