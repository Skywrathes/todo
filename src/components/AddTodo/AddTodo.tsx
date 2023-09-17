import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TodoForm } from "../TodoForm/TodoForm";
import { Button } from "../ui/button";
import React from "react";

function AddTodo() {
  const [open, setOpen] = React.useState(false);

  function closeHandler() {
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="md:text-lg lg:text-2xl">Add todo</Button>
      </DialogTrigger>
      <DialogContent>
        <TodoForm close={closeHandler}/>
      </DialogContent>
    </Dialog>
  );
}

export default AddTodo;