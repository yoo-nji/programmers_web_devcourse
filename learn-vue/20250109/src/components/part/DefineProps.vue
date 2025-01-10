<script setup>
import { ref } from "vue";
import Count from "../Count.vue";
const count = ref(10);
const increment = () => count.value++;
</script>
<template>
  <Count :count @increment="increment" />
</template>
<style scoped></style>
