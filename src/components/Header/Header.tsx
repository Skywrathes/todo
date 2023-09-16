import { ModeToggle } from "../mode-toggle";
import { ListTodo } from 'lucide-react';

function Header() {
  return (
    <header className="flex justify-between p-7 w-full">
      <div className="flex gap-2 items-center">
        <ListTodo size={48}/>
        <h1 className="text-3xl">My Todos</h1>
      </div>
      <ModeToggle />
    </header>
  );
}

export default Header;