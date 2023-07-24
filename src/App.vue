<!--template 로직 단순화-->
<!--<template>
  <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
</template>-->
<!--computed() 함수 사용, 값이 바뀌기전까진 caching 처리-->
<!--<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>-->
<!--function 호출, 호출시마다 계산로직 처리-->
<template>
  <p>Has published books:</p>
  <span>{{ calculateBooksMessage() }}</span>
</template>

<script setup>
import {reactive} from "vue";

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// const publishedBooksMessage = computed(() => {
//   return author.books.length > 0 ? 'Yes' : 'No'
// })

function calculateBooksMessage() {
  return author.books.length > 0 ? 'Yes' : 'No'
}
</script>

<style>
</style>
