<script setup>
import { useRouter } from "vue-router";

// useRoute -> 세그먼트나 매개변수
// useRouter -> 프로그래밍 탐색 방식

const router = useRouter();
</script>
<template>
  <h1>Not Found</h1>
  <p>Page not found</p>
  <button @click="router.replace('/')">홈으로 돌아가기</button>
</template>
<style scoped></style>
