export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todo-item">
      <span
        className={`todo-text ${todo.done ? "done" : ""}`}
        onClick={onToggle}
        title="Nhấn để đánh dấu hoàn thành / bỏ hoàn thành"
      >
        {todo.text}
      </span>
      <button className="btn-delete" type="button" onClick={onRemove}>
        Xóa
      </button>
    </li>
  );
}
