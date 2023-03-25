<template>
  <div class="min-h-screen p-8">
    <h1 class="text-4xl font-bold mb-5">{{ mealData.strMeal }}</h1>
    <div class="flex justify-center">
      <img
        class="rounded-t-lg w-full h-96 object-cover"
        :src="mealData.strMealThumb"
        alt=""
      />
    </div>
    <div class="flex flex-col md:flex-row justify-between mt-5">
      <span class="font-semibold">Category:&nbsp;{{ mealData.strCategory }}</span>
      <span class="font-semibold">Area:&nbsp;{{ mealData.strArea }}</span>
      <span class="font-semibold">Tags:&nbsp;{{ mealData.strTags }}</span>
    </div>
    <!-- <div class="flex justify-between mt-5">
      <div>
        <h1 class="text-4xl font-semibold">Ingredient</h1>
        <ul>
          <template v-for="(data, index) in new Array(20)">
            <li v-if="mealData[`strIngredient${index+1}`]">{{mealData[`strIngredient${index+1}`]}}</li>
          </template>
        </ul>
      </div>
      <div>
        <h1 class="text-4xl font-semibold">Measure</h1>
        <ul>
         <template v-for="(data, index) in new Array(20)">
            <li v-if="mealData[`strMeasure${index+1}`]">{{mealData[`strMeasure${index+1}`]}}</li>
          </template>
        </ul>
      </div>
    </div> -->

    <div class="mt-5">
        <h1 class="text-2xl font-semibold">Instructions:</h1>
        <p>{{mealData.strInstructions}}</p>
    </div>

    <div class="relative overflow-x-auto mt-5">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3 text-base">Ingredient</th>
            <th scope="col" class="px-6 py-3 text-base">Measure</th>
          </tr>
        </thead>
        <tbody v-for="(data, index) in new Array(20)" :key="index">
          <tr
            v-if="
              mealData[`strIngredient${index + 1}`] && mealData[`strMeasure${index + 1}`]
            "
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ mealData[`strIngredient${index + 1}`] }}
            </td>
            <td
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ mealData[`strMeasure${index + 1}`] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <pre>{{ mealData }}</pre> -->
  </div>
</template>
<script src="./meal-details.js"></script>
