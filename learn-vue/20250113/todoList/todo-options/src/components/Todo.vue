<script>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

export default {
  components: {
    TodoEditor,
    TodoHeader,
    TodoList,
  },
  data() {
    return {
      //전체 데이터
      todos: [],
    };
  },
  methods: {
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        done: false,
      });
    },
    toggleTodo(id) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="addTodo" />
    <TodoList :todos @toggle-todo="toggleTodo" @delete-todo="deleteTodo" />
  </div>
</template>
<style></style>
