<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";

//옵션스API beforeMount와 같음
onBeforeMount(() => {
  console.log("LifeCycleP.vue onBeforeMount");
});

//옵션스API mounted와 같음
onMounted(() => {
  console.log("LifeCycleP.vue onMounted");
});

//옵션스API beforeUpdate와 같음
onBeforeUpdate(() => {
  console.log("LifeCycleP.vue onBeforeUpdate");
});

//옵션스API updated와 같음
onUpdated(() => {
  console.log("LifeCycleP.vue onUpdated");
});

//옵션스API beforeUnmount와 같음
onUnmounted(() => {
  console.log("LifeCycleP.vue onUnmounted");
});

//옵션스API unmounted와 같음
onBeforeUnmount(() => {
  console.log("LifeCycleP.vue onBeforeUnmount");
});
</script>
<template>
  <h1>LifeCycle</h1>
</template>
<style scoped></style>
