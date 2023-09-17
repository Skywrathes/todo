import { useTodos } from "@/store/store";
import { Checkbox } from "../ui/checkbox";
import { TodoItemProps } from "@/types";

function TodoItem({id, title, completed}: TodoItemProps) {
  const toggle = useTodos((state) => state.toggleTodo)

  return (
    <div className="flex gap-5 items-center max-w-full">
      <Checkbox className="w-6 h-6 lg:w-7 lg:h-7" checked={completed} onCheckedChange={() => toggle(id)}/>
      { completed
      ? <p className="md:text-lg lg:text-2xl line-through text-left [word-break:break-word]">{title}</p>
      : <p className="md:text-lg lg:text-2xl text-left [word-break:break-word]">{title}</p> }
    </div>
  );
}

export default TodoItem;