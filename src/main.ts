// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

//test lint-staged
// test husky

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
