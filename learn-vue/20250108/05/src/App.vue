<script>
import FirstChild from "./components/FirstChild.vue";

export default {
  name: "App",
  components: {
    FirstChild,
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
};
</script>
<template>
  <FirstChild :name="name" :print-hello="printHello" v-on:greet="greet" />
</template>
<style scoped></style>
