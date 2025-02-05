<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  emits: ["add-todo"],
  methods: {
    handleSubmit() {
      this.$emit("add-todo", this.text);
      this.text = "";
    },
  },
};
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <div className="flex p-4">
      <input
        v-model="text"
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add Todo
      </button>
    </div>
  </form>
</template>
<style></style>
