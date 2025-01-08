<script>
import ProvideSecond from "./ProvideSecond.vue";

export default {
  name: "ProvideFirst",
  components: {
    ProvideSecond,
  },
  data() {
    return {};
  },
  inject: ["message", "name"],
  created() {
    console.log(this.message);
    console.log(this.name);
  },
};
</script>
<template>
  <h1>Provide First</h1>
  <h1>{{ message }} // {{ name }}</h1>
  <hr />
  <ProvideSecond />
</template>
<style scoped></style>
