<script>
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
};
</script>
<template>
  <!-- 이름이 있는 슬롯 -->
  <!-- 3개의 구멍 -->
  <!-- 혼합슬롯(이름이 없는 + 있는) -->
  <slot name="header"></slot>
  <!-- 이름이 없는 슬롯 (기본값는 v-slot:default) -->
  <slot></slot>
  <slot name="footer"></slot>
</template>
<style scoped></style>
