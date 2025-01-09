<script>
import CompositionP from "./components/part/CompositionP.vue";
import OptionP from "./components/part/OptionP.vue";

export default {
  name: "App",
  components: {
    OptionP,
    CompositionP,
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
</template>
<style scoped></style>
