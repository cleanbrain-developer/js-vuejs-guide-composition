<template>
  <div :class="classObject">AAAAAAAA</div>
</template>

<script setup>
import {computed, ref} from "vue";

const isActive = ref(true)
const error = ref({type: 'fatal'})

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))
</script>

<style>
</style>
