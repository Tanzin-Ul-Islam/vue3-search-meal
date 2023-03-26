<template>
  <div class="flex flex-col p-8 min-h-screen">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
      <Card v-for="(data, index) in meals" :key="index" :meal="data" />
    </div>
  </div>
</template>

<script src="./home.js"></script>
