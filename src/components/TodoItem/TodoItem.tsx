import { Checkbox } from "../ui/checkbox";


function TodoItem({id, title, completed}) {
  return (
    <div className="flex gap-4">
      <Checkbox checked={completed} />
      <h2>{title}</h2>
    </div>
  );
}

export default TodoItem;