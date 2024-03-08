<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  title: string
  hidden: boolean
}
const props = defineProps<Props>()

const $emit = defineEmits<{
  click: []
}>()

const _hidden = ref(false)

const toggleHidden = () => {
  console.log('Child Click')
  if (props.hidden! != undefined) $emit('click')
  else _hidden.value = !_hidden.value
}

const hidden = computed(() =>
  props.hidden !== undefined ? props.hidden : _hidden.value,
)
</script>

<template>
  <v-responsive class="d-flex">
    <v-btn
      block
      class="my-1"
      @click="toggleHidden"
      >Child</v-btn
    >
    <div class="py-14" />
    <div class="py-14" />
    <v-alert
      v-show="!hidden"
      type="success"
      >This content can be toggled on and off.</v-alert
    >
  </v-responsive>
</template>
