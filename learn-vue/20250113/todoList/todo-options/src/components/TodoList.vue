<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  components: {
    TodoListItem,
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    toggleTodo(id) {
      this.$emit("toggle-todo", id);
    },
    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
  },
};
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </ul>
</template>
<style></style>
