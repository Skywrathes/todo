import { useTodos } from "@/store/store";
import { Checkbox } from "../ui/checkbox";
import { TodoItemProps } from "@/types";

function TodoItem({id, title, completed}: TodoItemProps) {
  const toggle = useTodos((state) => state.toggleTodo)

  return (
    <div className="flex gap-5 items-center">
      <Checkbox checked={completed} onCheckedChange={() => toggle(id)}/>
      { completed
      ? <p className="md:text-lg lg:text-2xl line-through text-left">{title}</p>
      : <p className="md:text-lg lg:text-2xl text-left">{title}</p> }
    </div>
  );
}

export default TodoItem;