<script setup>
// import { reactive, ref } from "vue";
import { reactive } from "vue";
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
// console.log(count.value);

const state2 = reactive({
  count: 0,
});

// 둘은 차이가 없어 보이지만 스크립트 태그 내에서 사용할 땐 차이가 있다
// ref는 .value를 붙여야 실제 값을 사용할 수 있지만 reactive는 그냥 사용 가능
// console.log(state.value.count);
// console.log(count.value);
// console.log(state2.count);

//computed
const doubleCount = computed(() => count.value * 2);
const firstName = ref("신");
const lastName = ref("짱구");
// const fullName = computed(() => firstName.value + lastName.value);
const fullName = computed({
  get: () => firstName.value + lastName.value,
  set: (value) => {
    const names = value.split(" ");
    firstName.value = names[0];
    lastName.value = names[1];
  },
});

// watch 감시자
// 특정 데이터를 감시
const count2 = ref(0);

const state3 = ref({
  num: 0,
});

const incrementState3 = () => {
  state3.value.num++;
};

watch(count2, (cur, prev) => {
  console.log("count2 변경됨", cur, prev);
});
watch(
  state3,
  (cur, prev) => {
    console.log("state3 변경됨", cur, prev);
  },
  {
    deep: true,
  }
);

const state4 = reactive({
  num: 0,
});
const incrementState4 = () => {
  state4.num++;
};
watch(
  () => state4.num,
  (cur, prev) => {
    console.log("state4 변경됨", cur, prev);
  }
);
</script>
<template>
  <h1>Setup</h1>
  <Setup />
  <hr />
  <h3>ref</h3>
  <div>{{ count }}</div>
  <div>{{ state.count }}</div>
  <div>{{ numArr }}</div>

  <button @click="count++">증가(count)</button>
  <button @click="state.count++">증가(state.count)</button>
  <button @click="numArr.push(6)">추가(numArr)</button>

  <hr />
  <h3>reactive</h3>
  <div>{{ state2.count }}</div>
  <button @click="state2.count++">증가(state2.count)</button>

  <hr />
  <h3>computed</h3>
  <div>{{ doubleCount }}</div>
  <button @click="count++">증가(count)</button>

  <hr />
  <h3>computed2</h3>
  <div>{{ fullName }}</div>
  <button @click="fullName = '김 철수'">이름 변경</button>

  <hr />
  <h3>watch</h3>
  <div>{{ count2 }}</div>
  <button @click="count2++">증가(count2)</button>

  <hr />
  <h3>watch2 - ref로 반응형 데이터</h3>
  <div>{{ state3.num }}</div>
  <button @click="incrementState3">증가(state3.num)</button>

  <hr />
  <h3>watch3 - reactive로 반응형 데이터</h3>
  <div>{{ state4.num }}</div>
  <button @click="incrementState4">증가(state4.num)</button>
</template>
<style scoped></style>
