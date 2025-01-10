<script setup>
const props = defineProps({
  count: {
    type: Number,
    required: true,
    default() {
      return 10;
    },
    validator(value) {
      return value > 0;
    },
  },
});
// 컴포지션에선 부모 데이터를 받을 때 defineEmits를 사용
const emits = defineEmits(["increment"]);
</script>
<template>
  <h1>Count: {{ props.count }}</h1>
  <button @click="$emit('increment')">클릭</button>
</template>
<style scoped></style>
