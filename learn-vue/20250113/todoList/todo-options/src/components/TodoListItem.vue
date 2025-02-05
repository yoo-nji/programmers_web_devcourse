<script>
export default {
  props: {
    todo: {
      type: Object,
    },
  },
  emits: ["toggle-todo", "delete-todo"],
  beforeCreate() {
    console.log("beforeCreate");
  },
  updated() {
    console.log("updated");
  },
};
</script>
<template>
  <li
    className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div :class="`flex items-center ${todo.done && 'line-through'}`">
      <input
        type="checkbox"
        className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        :checked="todo.done"
        @change="$emit('toggle-todo', todo.id)"
      />
      <span>{{ todo.text }}</span>
    </div>
    <button
      className="text-red-500 hover:text-red-700 ml-4"
      @click="$emit('delete-todo', todo.id)"
    >
      Delete
    </button>
  </li>
</template>
<style></style>
