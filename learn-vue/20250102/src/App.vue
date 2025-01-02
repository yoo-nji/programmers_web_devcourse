<script>
export default {
  name: 'App',
  data() {
    return {

    };
  },
};
</script>
<template>
  <h1 v-if="true">true</h1>
  <h1 v-if="false">false</h1>

  <h1 v-show="true">true</h1>
  <h1 v-show="false">false</h1>
  <!-- v-if, v-show 차이점 -->
  <!-- v-if는 조건이 false일 경우 해당 엘리먼트를 제거 -->
  <!-- v-show는 조건이 false일 경우 해당 엘리먼트를 display: none 처리 -->
</template>
<style scoped></style>
