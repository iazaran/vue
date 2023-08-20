<script setup>
import { ref, watchEffect } from 'vue'

const input = ref(null)
const output = ref(null)

watchEffect(() => {
  output.value = input.value
})

/* onMounted(() => {
  input.value.focus()
}) */
</script>

<template>
  <h1 class="text-5xl mt-6">12</h1>
  <div class="max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <h2 class="text-2xl mb-5">Accessing the Template Refs</h2>
    
    <p class="mb-3">Input: {{ output }}</p>
    <input ref="input" />
  </div>
</template>
