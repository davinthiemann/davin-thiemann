import router from "../routes.js";
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@/assets/styles.scss';

createApp(App).use(router).mount('#app')
