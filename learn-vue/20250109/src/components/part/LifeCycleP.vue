<script setup>
import LifeCycle from "../LifeCycle.vue";
const isShow = ref(true);
</script>
<template>
  <LifeCycle v-if="isShow" />
  <button @click="isShow = !isShow">Toggle</button>
</template>
<style scoped></style>
