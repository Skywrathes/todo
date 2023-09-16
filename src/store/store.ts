import create from 'zustand';
import { nanoid } from 'nanoid';

export const useTodos = create(set => ({
  todos: [
    { id: 1, title: "Test task", completed: false },
    { id: 2, title: "Do awesome code", completed: false },
    { id: 1, title: "Cover by tests", completed: false },
  ],
  loading: false,
  error: null,
  addTodo: (title: string) => set( state => {
    const newTodo = { id: nanoid(), title, comleted: false }
    return {todos: [...state.todos, newTodo]}
  }),
}))