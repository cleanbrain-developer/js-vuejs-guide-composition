<template>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
  <button @click="awesome = !awesome">Toggle</button>
  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
  <button @click="ok = !ok">Toggle</button>
</template>

<script setup>
import {ref} from "vue";

const awesome = ref(true)
const ok = ref(true)
</script>

<style>
</style>
