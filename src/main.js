import { createApp } from 'vue'
import './style.css'
import router from './router';
import App from './App.vue'
import store from './store';

let app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
