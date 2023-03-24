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
    <div class="flex justify-center gap-1">
      <router-link v-for="(data, index) in list" :key="index" :to="'/letter/' + data" class="mr-3 font-semibold text-lg">{{
        data
      }}</router-link>
    </div>
    <pre>{{ingredients}}</pre>
  </div>
</template>

<script src="./home.js"></script>
