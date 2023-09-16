import { Button } from "../ui/button";

function Filter() {
  const filter = "all"
  return (
    <div className="flex gap-3">
      <Button disabled={filter === "all"}>All</Button>
      <Button>Completed</Button>
      <Button>Active</Button>
    </div>
  );
}

export default Filter;