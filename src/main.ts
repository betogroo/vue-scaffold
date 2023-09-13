// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

//test lint-staged
// test husky
// test commitlint

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
