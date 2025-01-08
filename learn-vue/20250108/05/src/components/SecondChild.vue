<script>
export default {
  name: "SecondChild",
  data() {
    return {};
  },
  props: {
    name: String,
    printHello: Function,
  },
  emits: ["greet"],
};
</script>
<template>
  <h1>Second Child</h1>
  {{ name }}
  <button @click="printHello">안녕</button>
  <button @click="$emit('greet')">인사</button>
</template>
<style scoped></style>
