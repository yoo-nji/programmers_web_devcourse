<script>
import Computed from "./components/Computed.vue";

export default {
  name: "App",
  components: {
    Computed,
  },
  data() {
    return {
      count: 0,
      query: "",
      name: "홍길동",
      age: 20,
      gender: "male",
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
  <h1>카운터</h1>
  <div>{{ count }}</div>
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
  <hr />
  <h1>메모이제이션</h1>
  <div v-memo="[name, age]">
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <div>{{ gender }}</div>
  </div>
  <button @click="name = '유리'">이름 변경</button>
  <button @click="age = 5">나이 변경</button>
  <button @click="gender = 'female'">성별 변경</button>
  <hr />
  <Computed />
</template>
<style scoped></style>
