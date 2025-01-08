<script>
import FirstChild from "./components/FirstChild.vue";
import ProvideFirst from "./components/ProvideFirst.vue";

export default {
  name: "App",
  components: {
    FirstChild,
    ProvideFirst,
  },
  data() {
    return {
      name: "james",
    };
  },
  methods: {
    printHello() {
      console.log("Hello");
    },
    greet() {
      console.log("greet");
    },
  },
  // app.vue에서 데이터를 공급하는 것
  provide() {
    return {
      message: "안녕",
      name: this.name,
    };
  },
  // inject: ["isSecond"],
  created() {
    console.log(this.isSecond);
  },
};
</script>
<template>
  <FirstChild :name="name" :print-hello="printHello" v-on:greet="greet" />
  <hr />
  <ProvideFirst />
</template>
<style scoped></style>
