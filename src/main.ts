import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import 'devextreme/dist/css/dx.light.css'
import './assets/main.scss'

createApp(App).use(pinia).mount('#app')
   

