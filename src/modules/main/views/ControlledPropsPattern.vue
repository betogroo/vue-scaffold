<script setup lang="ts">
import { ref } from 'vue'
import { ControlledPropsPatternComponent as Toggle } from '../components'
const hidden = ref(false)
const toggleHidden = () => {
  console.log('Parent Click')
  hidden.value = !hidden.value
}
</script>

<template>
  <h1>Controlled Props Pattern</h1>
  <code
    >This pattern allows that component can use its internal state but also be
    overridden by a parents state
  </code>
  <v-divider class="my-3" />
  <v-btn
    block
    @click="toggleHidden"
    >Parent</v-btn
  >
  <Toggle
    :hidden="hidden"
    title="Child"
    @click="hidden = !hidden"
  >
    This content can be toggled on and off.
  </Toggle>
</template>
