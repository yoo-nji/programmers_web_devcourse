<script setup>
import { ref } from "vue";

// 그냥 script setup 영역에 바로 적으면 onBeforeMount에 코드를 짠 거랑 비슷함
const posts = ref(null);

// 어떻게 async 없이 await를 사용할 수 있을까?
// 비동기 컴포넌트이기 때문이다
// 지금 컴포넌트를 비동기 컴포넌트로 대우해 줘야 함
const respons = await fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((data) => {
    posts.value = data;
  });
const data = await respons.json();
posts.value = data;
</script>
<template>
  <h3>Suspense Test</h3>
  <pre>{{ posts }}</pre>
</template>
<style scoped></style>
