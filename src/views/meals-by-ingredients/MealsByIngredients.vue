<template>
  <div class="p-8 min-h-screen">
    <div v-if="meals.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
      <Card v-for="(data, index) in meals" :key="index" :meal="data" />
    </div>
    <div
      v-else
      class="p-4 mt-5 text-sm w-full text-center text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <span class="font-medium">No data found!</span>
    </div>
  </div>
</template>
<script src="./meals-by-ingredients.js"></script>
