<script>
import First from "./components/First.vue";

export default {
  name: "App",
  components: {
    First,
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
<template>
  <button @click="isShow = !isShow">상태 제어</button>
  <First v-if="isShow" />
</template>
<style scoped></style>
