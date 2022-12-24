import create from "zustand";
import { Todo } from "../types";

type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: number) => void;
  removeComplete: () => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo: Todo) =>
    set((state: { todos: Todo[] }) => ({ todos: [...state.todos, todo] })),

  toggleTodo: (id: number) =>
    set((state: { todos: Todo[] }) => {
      const newTodos = [...state.todos];
      const todo = newTodos.find((todo: Todo) => todo.id === id);
      if (todo) todo.completed = !todo.completed;

      return { todos: [...newTodos] };
    }),

  removeComplete: () =>
    set((state: { todos: Todo[] }) => ({
      todos: state.todos.filter((todo: Todo) => !todo.completed),
    })),
}));
