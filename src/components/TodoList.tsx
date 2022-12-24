import { useTodoStore } from "../zustand/store";
import { Todo } from "../types";

const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props;
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
    </div>
  );
};

export const TodoList = () => {
  const todos: Todo[] = useTodoStore((state) => state.todos);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};
