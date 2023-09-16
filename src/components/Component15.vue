<script setup>
import { ref, defineEmits } from 'vue'
import ExternalLink from './ExternalLink.vue';

const checkedRequired = ref([])
const validation = ref(false)

const emit = defineEmits({
  // No validation
  click: null,

  // Validate submit event
  submit: ({ checkedRequired }) => {
    if (checkedRequired[0] == 'Required 1' && checkedRequired[1] == 'Required 2') {
      return true
    }

    return false
  }
})

function submitForm() {
  validation.value = emit('submit', { checkedRequired })
}
</script>

<template>
  <h1 class="text-5xl mt-6">15</h1>
  <div class="relative max-w-2xl lg:text-center border border-l-3 rounded border-gray-500 p-5">
    <ExternalLink link="https://vuejs.org/guide/components/events.html#events-validation" />
    <h2 class="text-2xl mb-5">Events Validation</h2>

    <p class="mb-3">Validation: {{ validation ? 'Valid' : 'Invalid' }}</p>
    
    <input type="checkbox" id="required1" value="Required 1" v-model="checkedRequired">
    <label class="ml-1 mr-3" for="required1">Required 1</label>
    
    <input type="checkbox" id="required2" value="Required 2" v-model="checkedRequired">
    <label class="ml-1 mr-3" for="required2">Required 2</label>
    
    <input type="checkbox" id="optional" value="Optional" v-model="checkedRequired">
    <label class="ml-1 mr-3" for="optional">Optional</label>

    <button class="bg-blue-100 border border-blue-500 rounded-md px-4 py-2 mb-2" @click="submitForm">Submit</button>
  </div>
</template>
