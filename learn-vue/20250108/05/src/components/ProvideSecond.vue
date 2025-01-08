<script>
import { count, increment } from "@/key/count";
export default {
  name: "ProvideSecond",
  data() {
    return {};
  },
  // 자식에서 공급해 보자
  provide: {
    isSecond: true,
  },
  inject: {
    secondCount: {
      from: count,
      default() {
        return 0;
      },
    },
    incrementsSymbol: {
      from: increment,
    },
  },
  created() {
    console.log(this.message);
    console.log(this.name);
  },
};
</script>
<template>
  <h1>Provide Second</h1>
  <h1>{{ message }} // {{ name }}</h1>
  <hr />
  <h1>Second Child Count: {{ count }}</h1>
  <button @click="count++">증가</button>
</template>
<style scoped></style>
