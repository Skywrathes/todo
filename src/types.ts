export interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoStore {
  todos: TodoItemProps[];
  addTodo: (title: string) => void;
  toggleTodo: (tidoId: string) => void;
  deleteCompletedTodos: () => void;
}

export interface FilterStore {
  filter: string;
  setFilter: (filterValue: string) => void;
}