export interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoStore {
  todos: TodoItemProps[];
  loading: boolean;
  error: null | string;
  addTodo: (title: string) => void;
  toggleTodo: (tidoId: string) => void;
}

export interface FilterStore {
  filter: string;
  setFilter: (filterValue: string) => void;
}