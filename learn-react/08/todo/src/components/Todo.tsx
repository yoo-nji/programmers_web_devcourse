import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos, // 기존의 ToDo 리스트를 펼쳐서 복사
      {
        id: Date.now(), // 현재 시간을 기준으로 고유 ID 생성
        text: text, // 함수 인자로 받은 text
        completed: false, // 기본적으로 완료되지 않은 상태로 설정
      },
    ]);
  };
  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map(
        (todo) =>
          todo.id === id
            ? { ...todo, completed: !todo.completed } // id가 일치하면 completed를 반전
            : todo // id가 일치하지 않으면 기존 todo 유지
      )
    );
  };
  const removeTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      {/* !! 잘 등록되는지 확인 */}
      {JSON.stringify(todos, null, 2)}
      <TodoHeader />
      <TodoEditor addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}
