<template>
    <v-app-bar color="blue" density="compact">
        <v-app-bar-title>
            <router-link :to="{name: 'HomeView'}" class="text-white text-decoration-none">Vue Scaffold</router-link>
        </v-app-bar-title>
        <div class="ma-3">
            <router-link class="text-white text-decoration-none" :to="{name: 'HomeView'}">Home</router-link> |
            <router-link class="text-white text-decoration-none" :to="{name: 'AboutView'}">About</router-link>
        </div>
    </v-app-bar>
</template>