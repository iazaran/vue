<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

fullName.value = 'Jane Doe'
</script>

<template>
  <h1 class="text-5xl mt-6">5</h1>
  <div class="max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <h2 class="text-2xl mb-5">Writable Computed</h2>
    
    <p class="text-xl">John Doe or {{ fullName }}</p>
  </div>
</template>
