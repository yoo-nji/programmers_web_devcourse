<script setup></script>
<template>
  <h1>Product</h1>
  <p>Product 페이지입니다.</p>
  <RouterLink :to="{ name: 'ProductInfo' }">info</RouterLink>
  <RouterView />
</template>
<style scoped></style>
