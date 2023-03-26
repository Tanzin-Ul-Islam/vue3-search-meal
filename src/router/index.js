import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import MealsByName from "../views/meals-by-name/MealsByName.vue"
import MealsByIngredients from "../views/meals-by-ingredients/MealsByIngredients.vue";
import MealsByLetter from "../views/meals-by-letter/MealsByLetter.vue";
import MealDetail from "../views/meal-details/MealDetail.vue";
import Ingredient from "../views/ingredient/Ingredient.vue";
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/by-name/:name?', name: 'MealsByName', component: MealsByName },
    { path: '/by-ingredients/:ingredient?', name: 'MealsByIngredients', component: MealsByIngredients },
    { path: '/by-letter/:letter?', name: 'MealsByLetter', component: MealsByLetter },
    { path: '/meal/:id', name: 'MealDetail', component: MealDetail },
    { path: '/ingredients', name: 'Ingredient', component: Ingredient }
]

let router = createRouter({
    history: createWebHistory(),
    routes
})

export default router