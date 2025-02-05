<script setup>
import { defineAsyncComponent } from "vue";
import Fetch from "./components/Fetch.vue";
import SuspenseBasic from "./components/SuspenseBasic.vue";

const SuspenseWithComp = defineAsyncComponent(() =>
  import("@/components/SuspenseBasic.vue")
); // 비동기 컴포넌트로 만들어 줌
</script>
<template>
  <!-- <Fetch /> -->
  <!-- 변수를 컴포넌트로 사용 -->
  <Suspense>
    <SuspenseWithComp />
    <template #fallback>
      <h1>Custom Loading...</h1>
    </template>
  </Suspense>
</template>
<style scoped></style>
