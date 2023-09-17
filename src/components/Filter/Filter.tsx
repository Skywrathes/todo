import { useFilter } from "@/store/store";
import { Button } from "../ui/button";

function Filter() {
  const {filter, setFilter} = useFilter()
  return (
    <div className="flex gap-4">
      <Button className="md:text-lg lg:text-2xl"
      disabled={filter === "all"} onClick={() => setFilter("all")}>All</Button>
      <Button className="md:text-lg lg:text-2xl"
      disabled={filter === "completed"} onClick={() => setFilter("completed")}>Completed</Button>
      <Button className="md:text-lg lg:text-2xl"
      disabled={filter === "active"} onClick={() => setFilter("active")}>Active</Button>
    </div>
  );
}

export default Filter;