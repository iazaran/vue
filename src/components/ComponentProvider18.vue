<script setup>
import { provide, ref } from 'vue'
import ComponentInjector18 from './ComponentInjector18.vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>

<template>
  <h1 class="text-5xl mt-6">18</h1>
  <div class="max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <h2 class="text-2xl mb-5">Provide / Inject</h2>

    <ComponentInjector18 />
  </div>
</template>
