
import Filter from "../Filter/Filter";

import TodoItem from "../TodoItem/TodoItem";
import { useTodos } from "@/store/store";

function TodoList() {
  const todos = useTodos(state => state.todos)

  return (
    <div>
      <Filter></Filter>
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} {...todo} />
        )
      })}
    </div>
  );
}

export default TodoList;