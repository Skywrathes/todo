import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { TodoItemProps, TodoStore, FilterStore } from '@/types';
import { persist } from 'zustand/middleware';

export const useTodos = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [
        { id: "id1", title: "Test task", completed: true },
        { id: "id2", title: "Do awesome code", completed: true },
        { id: "id3", title: "Cover by tests", completed: false },
      ],

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

      deleteCompletedTodos: () => set(state => {
        const activeTodosOnly = state.todos.filter((todo) => todo.completed === false)
        return { todos: activeTodosOnly }
      }),

    }),
    { name: 'todoStore' })
)



export const useFilter = create<FilterStore>(set => ({
  filter: "all",
  setFilter: (filterValue) => set({ filter: filterValue })
}))