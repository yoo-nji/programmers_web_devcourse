<script setup></script>
<template>
  <h1>Router</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>
<style scoped>
a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}
</style>
