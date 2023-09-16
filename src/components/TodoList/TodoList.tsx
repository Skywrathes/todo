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
    <div className="flex flex-col w-3/5 md:w-1/3 min-w-[300 px] gap-2">
      {todos.length === 0 && <p className="text-xl mb-4 mt-4">Nothing here...</p>}
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} {...todo} />
        )
      })}
    </div>
  );
}

export default TodoList;