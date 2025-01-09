<script>
export default {
  name: "Option",
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
};
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <h1>Double Count: {{ doubleCount }}</h1>
  <button @click="decrement">감소</button>
  <button @click="reset">리셋</button>
  <button @click="increment">증가</button>
</template>

<style scoped></style>
