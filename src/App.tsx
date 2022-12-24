import { useRef } from "react";
import { TodoList } from "./components/TodoList";
import { useTodoStore } from "./zustand/store";

function App() {
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeComplete = useTodoStore((state) => state.removeComplete);

  const textRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="3xl">Todo List:</h1>
      <TodoList />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!textRef.current || textRef.current.value === "") return;

          addTodo({
            id: Date.now(),
            text: textRef.current.value,
            completed: false,
          });

          textRef.current.value = "";
        }}
      >
        <input ref={textRef} type="text" placeholder="Buy bread..." />
        <div className="flex flex-col [&>*]:my-1">
          <button type="submit">Add Todo</button>
          <button onClick={removeComplete}>Remove All Completed</button>
        </div>
      </form>
    </div>
  );
}

export default App;
