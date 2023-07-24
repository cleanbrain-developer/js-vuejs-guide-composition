<template>
  <p>Message is: {{ message }}</p>

  <br/>

  <span>Multiline message is:</span>

  <br/>

  <p style="white-space: pre-line;">{{ message }}</p>

  <br/>

  <textarea v-model="message" placeholder="add multiple lines"></textarea>

  <br/>
  <br/>

  <input v-model="message" placeholder="edit me" />

  <br/>
  <br/>

  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <br/>
  <br/>

  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>

  <br/>
  <br/>

  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>

  <br/>
  <br/>

  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <br/>
  <br/>

  <div>Selected: {{ selected }}</div>

  <select v-model="selected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</template>

<script setup>
import {ref} from "vue";

const message = ref('')
const checked = ref(true)
const checkedNames = ref([])
const picked = ref('')
const selected = ref('')
</script>

<style>
</style>
