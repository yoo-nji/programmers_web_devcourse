<script>
export default {
  name: "Vfor",
  data() {
    return {
      items: ["apple", "banana", "cherry"],
      itemsObj: [
        { id: 1, name: "james" },
        { id: 2, name: "john" },
        { id: 3, name: "jane" },
      ],
      person: {
        name: "john",
        age: 30,
      },
    };
  },
};
</script>
<template>
  <h1>1. v-for</h1>
  <ul>
    <!-- for in 문법과 유사 -->
    <li v-for="(value, index) in items" :key="index">
      {{ index }}: {{ value }}
    </li>
  </ul>
  <hr />
  <h3>배열 안 객체 v-for로 반복 가능(filter 이용 가공)</h3>
  <ul>
    <!-- 조건처리 가능: 자바스크립트의 문법적 허용 -->
    <li
      v-for="value in itemsObj.filter((item) => item.name === 'james')"
      :key="id"
    >
      {{ value.id }}: {{ value.name }}
    </li>
  </ul>
  <hr />
  <h3>객체도 v-for로 반복 가능</h3>
  <ul>
    <li v-for="(value, key) in person" :key="key">{{ key }}: {{ value }}</li>
  </ul>
</template>
<style scoped></style>
