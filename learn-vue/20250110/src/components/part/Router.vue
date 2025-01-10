<script setup></script>
<template>
  <h1>Router</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <!-- 이름이 있는 경로 방식 -->
    <RouterLink :to="{ name: 'About' }">About</RouterLink>
    <RouterLink :to="{ name: 'Product' }">Product</RouterLink>
    <RouterLink :to="{ name: 'Dashboard' }">Dashboard</RouterLink>
    <!-- 동적은 이렇게 -->
    <RouterLink
      :to="{
        name: 'User',
        params: { user: 'mike', id: '1' },
        query: { lang: 'ko' },
      }"
      >User</RouterLink
    >
  </nav>
  <RouterView name="header" />
  <!-- name이 없으면 기본으로 렌더링 -->
  <RouterView />
  <RouterView name="footer" />
</template>
<style scoped>
a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}
</style>
