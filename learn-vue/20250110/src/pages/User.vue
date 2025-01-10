<script setup>
import { useRoute } from "vue-router";

const route = useRoute(); //컴포저블
// Proxy 반환
const { id, user } = route.params;
const { lang } = route.query; // 쿼리스트링값 받아오기
console.log(route);
</script>
<template>
  <h1>User</h1>
  <p>id: {{ id }}</p>
  <p>user: {{ user }}</p>
  <p>lang: {{ lang }}</p>
</template>
<style scoped></style>
