<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
      query: "",
    };
  },
  methods: {
    decrement(e) {
      this.count = this.count - 1;
      console.log(e);
    },
    reset() {
      if (this.count === 0) {
        return;
      }
      this.count = 0;
    },
    increment() {
      this.count = this.count + 1;
    },
    incrementByAmout(num) {
      this.count = this.count + num;
    },
    handleKeyup() {
      if (this.query === "") return;
      console.log(this.query + "검색 중...");
    },
    handleInput($event) {
      this.query = $event.target.value;
    },
  },
};
</script>
<template>
  <h1>{{ count }}</h1>
  <button v-on:click="decrement">감소</button>
  <button v-on:click="reset">리셋</button>
  <button v-on:click="increment">증가</button>
  <button v-on:click="incrementByAmout(10)">10 증가</button>
  <!-- 수식어 -->
  <!-- 이벤트가 한 번만 발생 -->
  <button @click.once="incrementByAmout(10)">10 증가(일회용)</button>
  <a href="https://www.naver.com" @click.prevent></a>
  <!-- <div><input type="text" v-model="query" @keyup.enter="handleKeyup" /></div> -->

  <input type="text" :value="query" @input="handleInput" />
  {{ query }}
</template>
<style scoped></style>
