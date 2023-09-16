<script setup>
import { ref, watch } from 'vue'
import ExternalLink from './ExternalLink.vue';

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  } else {
    answer.value = 'Questions usually contain a question mark. ;-)'
  }
})
</script>

<template>
  <h1 class="text-5xl mt-6">11</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/essentials/watchers.html#watchers" />
    <h2 class="text-2xl mb-5">Watcher</h2>
    
    <p class="mb-3">
      Ask a yes/no question and see random answers from an API:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>
