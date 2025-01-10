<script>
import CompositionP from "./components/part/CompositionP.vue";
import DefineProps from "./components/part/DefineProps.vue";
import LifeCycleP from "./components/part/LifeCycleP.vue";
import OptionP from "./components/part/OptionP.vue";
import SetupP from "./components/part/SetupP.vue";
import Watch from "./components/Watch.vue";

export default {
  name: "App",
  components: {
    OptionP,
    CompositionP,
    SetupP,
    Watch,
    LifeCycleP,
    DefineProps,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <!-- <OptionP /> -->
  <!-- <hr /> -->
  <!-- <CompositionP /> -->
  <!-- <hr /> -->
  <SetupP />
  <!-- <hr /> -->
  <Watch />
  <!-- <LifeCycleP /> -->
  <!-- <DefineProps /> -->
</template>
<style scoped></style>
