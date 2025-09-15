import { useEffect, useState } from "react";
import "./b1.css";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("todos")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    const v = text.trim();
    if (!v) return;
    setTodos((prev) => [{ id: Date.now(), text: v, done: false }, ...prev]);
    setText("");
  };

  const toggleDone = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );

  const removeTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  return (
    <section className="section">
      <h2>Bài 1: To-do List</h2>
      <form onSubmit={addTodo} className="todo-form" autoComplete="off">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập công việc…"
          maxLength={120}
        />
        <button className="btn" type="submit">Thêm</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleDone(todo.id)}
            onRemove={() => removeTodo(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
}
