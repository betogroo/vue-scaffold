<template>
  <v-app-bar
    color="blue"
    density="compact"
  >
    <v-app-bar-title>
      <RouterLink
        class="text-white text-decoration-none"
        :to="{ name: 'HomeView' }"
        >Vue Scaffold</RouterLink
      >
    </v-app-bar-title>
    <div class="ma-3">
      <RouterLink
        class="text-white text-decoration-none"
        :to="{ name: 'HomeView' }"
        >Home</RouterLink
      >

      |
      <RouterLink
        class="text-white text-decoration-none"
        :to="{ name: 'CounterView' }"
        >Counter</RouterLink
      >
      |
      <RouterLink
        class="text-white text-decoration-none"
        :to="{ name: 'FormView' }"
        >Form</RouterLink
      >
      |
      <RouterLink
        class="text-white text-decoration-none"
        :to="{ name: 'AboutView' }"
        >About</RouterLink
      >
    </div>
  </v-app-bar>
</template>
