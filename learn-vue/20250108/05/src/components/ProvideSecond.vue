<script>
export default {
  name: "ProvideSecond",
  data() {
    return {};
  },
  // 자식에서 공급해 보자
  provide: {
    isSecond: true,
  },
  inject: ["message", "name"],
  created() {
    console.log(this.message);
    console.log(this.name);
  },
};
</script>
<template>
  <h1>Provide Second</h1>
  <h1>{{ message }} // {{ name }}</h1>
</template>
<style scoped></style>
