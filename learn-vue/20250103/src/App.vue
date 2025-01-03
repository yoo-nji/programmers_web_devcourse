<script>
import Template from "./components/Template.vue";
import Vfor from "./components/Vfor.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Template,
    Vfor,
  },
};
</script>
<template>
  <Vfor />
  <Template />
</template>
<style scoped></style>
