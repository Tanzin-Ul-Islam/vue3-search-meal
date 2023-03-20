import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";
const routes = [
    { path: '/', name: 'Home', component: Home }
]

let router = createRouter({
    history: createWebHistory(),
    routes
})

export default router