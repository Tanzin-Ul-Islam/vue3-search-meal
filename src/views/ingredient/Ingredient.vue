<template>
  <div class="p-8 min-h-screen">
    <ul class="p-4 grid grid-cols-3">
      <li class="p-5" v-for="(data, index) in ingredients" :key="index">
        <a
          href="javascript:void(0)"
          @click="$router.push('/by-ingredients/' + data.strIngredient)"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-slate-900 hover:bg-slate-900 group hover:shadow dark:bg-slate-900 dark:hover:bg-slate-900 dark:text-white text-center"
        >
          <span class="flex-1 ml-3 whitespace-nowrap">{{ data.strIngredient }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script src="./ingredient.js"></script>
