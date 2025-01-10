<script setup>
import { useCountStore } from "@/stores/countStore";
import { storeToRefs } from "pinia";

//인스턴스 객체 생성
// useCountStore 함수를 사용하여 countStore를 가져옵니다.
const countStore = useCountStore();

// storeToRefs 함수를 사용하여 countStore를 반응성을 유지한채로 비구조화할당합니다.
const { count, doubleCount } = storeToRefs(countStore);
//단 메서드는 비구조화할당 안 됨
const { increment } = countStore;
</script>
<template>
  <h1>Home View: {{ count }}</h1>
  <h1>Home View: {{ doubleCount }}</h1>
  <button @click="increment">증가</button>
</template>
<style scoped></style>
