<script setup>
import ExternalLink from './ExternalLink.vue';

const attributeName = "href"
const eventName = "click"

function alert(message) {
  window.alert(message)
}
</script>

<template>
  <h1 class="text-5xl mt-6">2</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/essentials/template-syntax.html#directives" />
    <h2 class="text-2xl mb-5">Dynamic Arguments</h2>
    
    <a class="text-blue-700" :[attributeName]="'http://www.google.com'" target="_blank">{{ attributeName }}</a>
    <br>
    <a class="text-blue-700 cursor-pointer" @[eventName]="alert('Hello!')">{{ eventName }}</a>
  </div>
</template>
