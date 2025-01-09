<script>
import CompositionP from "./components/part/CompositionP.vue";
import OptionP from "./components/part/OptionP.vue";
import SetupP from "./components/part/SetupP.vue";
import Setup from "./components/Setup.vue";

export default {
  name: "App",
  components: {
    OptionP,
    CompositionP,
    SetupP,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <OptionP />
  <hr />
  <CompositionP />
  <hr />
  <SetupP />
</template>
<style scoped></style>
