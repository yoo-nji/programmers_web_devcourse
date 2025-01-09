<script>
import Button from "./components/Button.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
  name: "App",
  components: {
    Button,
    DefaultLayout,
  },
  data() {
    return {
      slotName: "header",
    };
  },
};
</script>
<template>
  <Button> <span>로그아웃</span> </Button>
  <Button #="{ buttonText, count }">
    <span>{{ buttonText }} // {{ count }}</span>
  </Button>
  <DefaultLayout>
    <!-- 템플릿 태그와 함께 사용 -->
    <template #[slotName]>
      <h1>Header</h1>
    </template>

    <template v-slot:default>
      <p>Main</p>
    </template>

    <template v-slot:footer>
      <p>Footer</p>
    </template>
  </DefaultLayout>
</template>
<style scoped>
span {
  color: red;
}
</style>
