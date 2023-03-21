import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import MealList from "../views/meal/MealList.vue";
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/letter/:letter', name: 'Meal', component: MealList }
]

let router = createRouter({
    history: createWebHistory(),
    routes
})

export default router