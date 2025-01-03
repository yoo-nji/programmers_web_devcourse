<script>
import InlineStyle from "./components/InlineStyle.vue";
import StyledComponents from "./components/StyledComponents.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    InlineStyle,
    StyledComponents,
  },
};
</script>
<template>
  <button class="btn btn-primary">로그인</button>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <div><h2>SCSS Test</h2></div>
  <StyledComponents />
</template>
<style lang="scss" scoped>
div {
  h2 {
    color: red;
  }
}
</style>
