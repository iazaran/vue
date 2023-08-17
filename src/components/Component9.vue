<script setup>
function alert(message) {
  window.alert(message)
}
</script>

<template>
  <h1 class="text-5xl mt-6">9</h1>
  <div class="max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <h2 class="text-2xl mb-5">Key Modifiers</h2>
    
    <p>Active the input and press <key>Esc</key> key</p>
    <input class="disabled:opacity-75" @keyup.esc="alert('So you know it is on top left!')" />
  </div>
</template>
