import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { TodoItemProps, TodoStore, FilterStore } from '@/types';
import { persist } from 'zustand/middleware';

// const myMiddlewares = (f: TodoStore) => devtools(persist(f, { name: 'todoStore' }))

export const useTodos = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [
        { id: "id1", title: "Test task", completed: true },
        { id: "id2", title: "Do awesome code", completed: true },
        { id: "id3", title: "Cover by tests", completed: false },
      ],
      loading: false,
      error: null,

      addTodo: (title) => set(state => {
        const newTodo = { id: nanoid(), title, completed: false }
        return { todos: [...state.todos, newTodo] }
      }),

      toggleTodo: (todoId) => set(state => {
        const newTodos = state.todos.map((todo: TodoItemProps) =>
          todoId === todo.id
            ? { ...todo, completed: !todo.completed }
            : todo);
        return { todos: newTodos }
      }),

    }),
    { name: 'todoStore' })
)



export const useFilter = create<FilterStore>(set => ({
  filter: "all",
  setFilter: (filterValue) => set({ filter: filterValue })
}))