<script setup>
defineProps({
  firstName: String,
  lastName: String
})

defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
  <h1 class="text-5xl mt-6">16</h1>
  <div class="max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <h2 class="text-2xl mb-5">Multiple v-model bindings</h2>

    <h4 class="mb-3 text-lg">{{ firstName }} {{ lastName }}</h4>
    <input
      class="mr-3"
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)"
    />
    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)"
    />
  </div>
</template>
