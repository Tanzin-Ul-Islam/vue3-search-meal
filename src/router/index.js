import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import MealList from "../views/meal/MealList.vue";
import MealsByName from "../views/meals-by-name/MealsByName.vue"
import MealsByIngredients from "../views/meals-by-ingredients/MealsByIngredients.vue";
import MealsByLetter from "../views/meals-by-letter/MealsByLetter.vue";
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/letter/:letter?', name: 'Meal', component: MealList },
    { path: '/by-name/:name?', name: 'MealsByName', component: MealsByName },
    { path: '/by-ingredients/:ingredient?', name: 'MealsByIngredients', component: MealsByIngredients },
    { path: '/by-letter/:letter?', name: 'MealsByLetter', component: MealsByLetter }
]

let router = createRouter({
    history: createWebHistory(),
    routes
})

export default router