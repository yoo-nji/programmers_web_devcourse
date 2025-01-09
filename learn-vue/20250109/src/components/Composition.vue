<script>
import { computed, ref } from "vue";

export default {
  name: "Composition",
  setup() {
    const count = ref(0);
    // 컴퓨티드에 콜백함수를 넣으면 그 반환값이 계산된 값이 된다
    const doubleCount = computed(() => count.value * 2);
    const increment = () => count.value++;
    const decrement = () => count.value--;
    const reset = () => (count.value = 0);

    // 정의한 걸 return으로 다 내보냄
    return {
      count,
      doubleCount,
      increment,
      decrement,
      reset,
    };
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
