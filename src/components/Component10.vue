<script setup>
import { ref } from 'vue'

const checkedNames = ref([])
</script>

<template>
  <h1 class="text-5xl mt-6">10</h1>
  <div class="max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <h2 class="text-2xl mb-5">Form Input Bindings</h2>

    <p class="mb-3">Checked names: {{ checkedNames }}</p>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label class="ml-1 mr-3" for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label class="ml-1 mr-3" for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label class="ml-1 mr-3" for="mike">Mike</label>
  </div>
</template>
