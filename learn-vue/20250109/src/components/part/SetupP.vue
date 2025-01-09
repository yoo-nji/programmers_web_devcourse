<script setup>
import { ref } from "vue";
import Setup from "../Setup.vue";

// 반응형 데이터 정의
// ref, reactive
// ref: 기본 자료형을 반응형 데이터로 정의할 때 사용
// reactive: 참조 자료형(배열, 객체) 반응형 데이터로 정의할 때 사용

const count = ref(0);
const state = ref({
  count: 0,
});
const numArr = ref([1, 2, 3, 4, 5]);
console.log(count.value);
</script>
<template>
  <h1>Setup</h1>
  <Setup />
  <hr />
  <div>{{ count }}</div>
  <div>{{ state.count }}</div>
  <div>{{ numArr }}</div>

  <button @click="count++">증가(count)</button>
  <button @click="state.count++">증가(state.count)</button>
  <button @click="numArr.push(6)">추가(numArr)</button>
</template>
<style scoped></style>
