import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCountStore = defineStore('countStore', () => {
  const count = ref(0); // 전역적으로 count를 사용할 수 있음
  const doubleCount = computed(() => count.value * 2);
  const increment = () => count.value++;

  // count와 increment를 외부로 반환
  return {
    count,
    doubleCount,
    increment,
  };
});