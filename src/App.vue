<template>
  <button @click="count++">Add 1</button>
  <p>Count is: {{ count }}</p>

  <!-- `greet` is the name of the method defined above -->
  <button @click="greet">Greet</button>

  <br/>
  <br/>

  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>

  <br/>
  <br/>

  <!-- using $event special variable -->
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>

  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>

</template>

<script setup>
import {ref} from "vue";

const count = ref(0)
const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}

function say(message) {
  alert(message)
}

function warn(message, event) {
  // now we have access to the native event
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>

<style>
</style>
