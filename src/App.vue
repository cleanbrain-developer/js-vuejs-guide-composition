<template>
  <!-- v-if 지시문 통한 노드 토글 샘플 -->
  <p v-if="seen">Now you see me</p>
  <button @click="toggle">toggle</button>
</template>

<script setup>
import {ref} from "vue";

const seen = ref(true)

function toggle() {
  seen.value = seen.value ? false : true
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
