import TodoItem from "../TodoItem/TodoItem";
import { useFilter, useTodos } from "@/store/store";

function TodoList() {
  const filter = useFilter(state => state.filter);
  const todos = useTodos((state) => {
    switch (filter) {
      case 'completed':
        return state.todos.filter((todo) => todo.completed);
      case 'active':
        return state.todos.filter((todo) => !todo.completed);
      default:
        return state.todos;
    }
  });

  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} {...todo} />
        )
      })}
    </div>
  );
}

export default TodoList;