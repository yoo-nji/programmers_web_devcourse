<script setup>
import { computed, ref } from "vue";

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
const increment = () => count.value++;
const decrement = () => count.value--;
const reset = () => (count.value = 0);
</script>
<template>
  <h1>Count: {{ count }}</h1>
  <h1>Double Count: {{ doubleCount }}</h1>
  <button @click="decrement">감소</button>
  <button @click="reset">리셋</button>
  <button @click="increment">증가</button>
</template>
<style scoped></style>
