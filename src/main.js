import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'vue-global-api'

import '@/assets/css/main.scss';

const pinia = createPinia()
const app = createApp(App);
app.use(pinia)

app.mount('#app');