<script setup>
import { ref, watch, reactive } from "vue";
const num = ref(0);
watch(num, (cur, prev) => {
  console.log("num 변경");
  console.log(`현재 값: ${cur}`);
  console.log(`이전 값: ${prev}`);
});

const state = ref({ num: 0 });
watch(state, (cur, prev) => {
  console.log("state.num 변경");
  console.log("현재 값:", cur);
  console.log("이전 값:", prev);
});

const state2 = reactive({ num: 0 });
watch(
  () => state2.num,
  (cur, prev) => {
    console.log("state2.num 변경");
    console.log("현재 값:", cur);
    console.log("이전 값:", prev);
  }
);

//  ✅ jsonplaceholder에서 데이터 가져오기
const todoId = ref(1);
const date = ref(null);

watch(
  todoId,
  async () => {
    console.log("cal!");
    const result = await (
      await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    ).json();
    date.value = result;
  },
  {
    immediate: true,
  }
);

//✅ watchEffect를 이용하면 더 간결하게 쓸 수 있다
watchEffect(async () => {
  const result = await (
    await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  ).json();
  date.value = result;
});
</script>
<template>
  <div>
    <h1>watch 비교</h1>
    <button @click="num++">num 변경</button>
    <button @click="state.num++">state.num 변경</button>
    <button @click="state2.num++">state2.num 변경</button>

    <hr />

    <h1>특정 값에따라 데이터 불러오기</h1>
    <input v-model="todoId" type="text" />
    <p>todoId: {{ todoId }}</p>
    <pre>date: {{ date }}</pre>
  </div>
</template>
<style scoped>
button {
  display: block;
  margin: 10px 0;
}
</style>
