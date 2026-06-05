function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span>{todo.title}</span>

      <div className="action-buttons">
        <button className="done" onClick={() => toggleTodo(todo._id, todo.completed)}>✔</button>
        <button className="delete" onClick={() => deleteTodo(todo._id)}>🗑</button>
      </div>
    </li>
  );
}

export default TodoItem;
