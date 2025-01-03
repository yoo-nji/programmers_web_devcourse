<script>
export default {
  components: {},
  name: "InlineStyle",
  data() {
    return {
      styleObj: {
        color: "orange",
        textDecoration: "underline",
      },
      additionalStyles: {
        fontSize: "50px",
      },
    };
  },
};
</script>

<template>
  <div>
    <!-- 인라인 스타일 직접 적용 -->
    <h1 style="color: red; text-decoration: underline">Hello</h1>

    <!-- 인라인 스타일 객체를 템플릿에서 직접 정의 -->
    <h1 :style="{ color: 'blue', textDecoration: 'underline' }">Hello</h1>

    <!-- Vue 데이터 객체의 스타일 사용 -->
    <h1 :style="styleObj">Hello</h1>

    <!-- 배열 스타일 병합 -->
    <h1 :style="[styleObj, additionalStyles]">Hello</h1>

    <!-- 객체 클래스 바인딩 기법 -->
    <h1 :class="{ active: true }">Hello</h1>
    <h1 :class="{ active: false, 'text-danger': true }">Hello</h1>
  </div>
</template>

<style scoped>
.active {
  color: blue;
}
.text-danger {
  color: red;
}
</style>
