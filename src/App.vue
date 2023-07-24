<template>
  <div id="app">
    <button @click="increment">
      Count is: {{ count }}
    </button>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<style scoped>
button {
  font-weight: bold;
}
</style>
