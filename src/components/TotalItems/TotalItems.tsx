import { useTodos } from "@/store/store";

function TotalItems() {
  const totalTodos = useTodos(state => state.todos.length);
  const activeTodos = useTodos(state => state.todos.filter(el => el.completed === false).length);
  return (
    <p className=" md:text-lg lg:text-2xl"><b>{activeTodos}</b> todos left out of <b>{totalTodos}</b></p>
  );
}

export default TotalItems;