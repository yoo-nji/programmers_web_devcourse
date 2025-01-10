<script setup>
import { useCountStore } from "@/stores/countStore";

const countStore = useCountStore();
</script>

<template>
  <h1>About View: {{ countStore.count }}</h1>
  <button @click="countStore.increment">증가</button>
</template>

<style scoped></style>
