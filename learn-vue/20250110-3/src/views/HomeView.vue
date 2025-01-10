<script setup>
import { useCountStore } from "@/stores/countStore";

//인스턴스 객체 생성
// useCountStore 함수를 사용하여 countStore를 가져옵니다.
const countStore = useCountStore();
</script>
<template>
  <h1>Home View: {{ countStore.count }}</h1>
  <button @click="countStore.increment">증가</button>
</template>
<style scoped></style>
