<template>
  <div class="p-8" style="min-height: 35rem">
    <input
      class="rounded border-2 border-gray-200 w-full"
      id="search"
      type="search"
      placeholder="search for meal"
      v-model="searchKey"
      @change="handleSearch"
    />
    <h5 class="mt-5 text-lg font-semibold">Search result for: <span class="text-blue-500">{{searchKey}}</span></h5>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      <Card v-for="(data, index) in meals" :key="index" :meal="data"/>
    </div>
  </div>
</template>
<script src="./meals-by-name.js"></script>
