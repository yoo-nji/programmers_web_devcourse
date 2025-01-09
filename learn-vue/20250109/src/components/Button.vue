<script>
export default {
  name: "Button",
  data() {
    return {
      buttonText: "헬로우",
      count: 0,
    };
  },
};
</script>

<template>
  <!-- 이름이 없는 슬롯 -->

  <button>
    <slot :buttonText="buttonText" :count="count"></slot>
  </button>
</template>

<style scoped>
button {
  border: 1px solid blue;
  background-color: blue;
  width: 100px;
  padding: 15px 0;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  cursor: pointer;
}
span {
  color: blue;
}
</style>
