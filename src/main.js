import { createApp } from 'vue'
import App from './App.vue'
import './Mystyle.css';
import 'bootstrap' 

import router from './router'


createApp(App).use(router).mount('#app')
