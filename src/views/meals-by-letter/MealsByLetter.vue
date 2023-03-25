<template>
  <div class="flex flex-col p-8 min-h-screen">
    <div class="mb-5">
      <input
        class="rounded border-2 border-gray-200 w-full"
        id="search"
        type="search"
        placeholder="search for meal"
      />
    </div>
    <div class="flex flex-wrap justify-center gap-1">
      <a
        href="javascript:void(0)"
        v-for="(data, index) in list"
        :key="index"
        @click="handleClick(data)"
        class="mr-3 text-lg hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-cente mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-100"
        >{{ data }}</a
      >
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10" v-if="mealList.length > 0">
      <Card v-for="(data, index) in mealList" :key="index" :meal="data" />
    </div>
    <div
      v-else
      class="p-4 mt-5 text-sm w-full text-center text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <span class="font-medium">No data found!</span>
    </div>
    <!-- <pre>{{ ingredients }}</pre> -->
  </div>
</template>
<script src="./meals-by-letter.js"></script>
