<script>
import SecondChild from "./SecondChild.vue";

export default {
  name: "FirstChild",
  components: {
    SecondChild,
  },
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
    },
    printHello: {
      type: Function,
    },
  },
  emits: ["greet"],
  methods: {
    greet() {
      this.$emit("greet");
    },
  },
  // 자식 -> 부모 참조
  mounted() {
    console.log(this.$parent);
  },
};
</script>
<template>
  <h1>First Child</h1>
  <button @click="printHello">Print Hello</button>
  <button @click="$emit('greet')">Greet</button>
  <SecondChild :name="name" :print-hello="printHello" @greet="$emit('greet')" />
</template>
