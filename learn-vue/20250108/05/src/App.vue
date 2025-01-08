<script>
import { computed } from "vue";
import FirstChild from "./components/FirstChild.vue";
import ProvideFirst from "./components/ProvideFirst.vue";
import { count, increment } from "@/key/count";

export default {
  name: "App",
  components: {
    FirstChild,
    ProvideFirst,
  },
  data() {
    return {
      name: "james",
      count: 0,
    };
  },
  methods: {
    printHello() {
      console.log("Hello");
    },
    greet() {
      console.log("greet");
    },
    increment() {
      console.log("increment");
      this.count++;
    },
  },
  // app.vue에서 데이터를 공급하는 것
  provide() {
    return {
      message: "안녕",
      name: this.name,
      [count]: computed(() => this.count),
      [increment]: this.increment,
    };
  },
  // inject: ["isSecond"], //자식 컴포넌트에서 데이터를 불러올 수 없다 ❌
  created() {
    console.log(this.isSecond);
  },
  mounted() {
    console.log(this.$refs.childRef);
  },
};
</script>
<template>
  <FirstChild ref="childRef" />
  <hr />
  <ProvideFirst />
  <hr />
  <h1>App Count: {{ count }}</h1>
</template>
<style scoped></style>
