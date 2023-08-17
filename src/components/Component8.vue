<script setup>
import { ref } from 'vue'

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}
</script>

<template>
  <h1 class="text-5xl mt-6">8</h1>
  <div class="max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <h2 class="text-2xl mb-5">List Rendering</h2>
    
    <ul v-for="(numbers, index) in sets">
      <li v-for="(n, i) in even(numbers)">Parent index {{ index }} | Child index {{ i }}: <b>{{ n }}</b></li>
    </ul>
  </div>
</template>
