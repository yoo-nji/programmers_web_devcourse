<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav style="position: sticky; top: 0">
    <RouterLink to="/">Home</RouterLink>
    <a href="/#home">Home(#home)</a>

    <RouterLink to="/about">About</RouterLink>
    <a href="/#about">About(#about)</a>
  </nav>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
</style>
