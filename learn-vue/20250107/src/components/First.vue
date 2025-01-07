<script>
export default {
  name: "First",
  data() {
    return {
      count: 0,
      count2: 0,
      arr: [1, 2, 3], // 참조자료형
    };
  },
  watch: {
    //깊은 사용법
    //단 이전값 현재값 차이를 확인할 수 없음
    //변경된 최신의 값만 확인 가능
    arr: {
      handler(cur, prev) {
        console.log("현재 값", cur);
        console.log("이전 값", prev);
      },
      deep: true,
    },
    //기본 사용법
    count(cur, prev) {
      console.log("현재 값", cur);
      console.log("이전 값", prev);
    },
    count2(cur, prev) {
      console.log("현재 값", cur);
      console.log("이전 값", prev);
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
<template>
  <h1>First</h1>
  <p>count: {{ count }}</p>
  <button @click="count++">count 증가</button>
  <p>count2: {{ count2 }}</p>
  <button @click="count2++">count2 증가</button>
  <p>arr: {{ arr }}</p>
  <button @click="arr.push(4)">arr 요소 추가</button>
</template>
<style scoped></style>
