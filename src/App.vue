<template>
  <!-- v-for -->
  <ul>
    <li v-for="(item, index) in items" v-bind:key="item.message">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
  </ul>

  <ul>
    <li v-for="{ message } in items" v-bind:key="message">
      {{ message }}
    </li>
  </ul>

  <!-- with index alias -->
  <ul>
    <li v-for="({ message }, index) in items" v-bind:key="message">
      {{ message }} {{ index }}
    </li>
  </ul>

  <!-- v-for with an Object -->
  <ul>
    <li v-for="(value, key, index) in myObject" :key="value.author">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>

  <!-- v-for with a Range -->
  <span v-for="n in 10" :key="n">{{ n }}</span>
</template>

<script setup>
import {reactive, ref} from "vue";

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<style>
</style>
