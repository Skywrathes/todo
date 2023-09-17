import { useTodos, useFilter } from './store';
import { renderHook, act } from '@testing-library/react'
import { test, expect } from 'vitest';

test('add new todo', () => {
  const { result } = renderHook(() => useTodos());
  act(() => {
    result.current.addTodo('New');
  });

  const updatedTodo = result.current.todos;
  expect(updatedTodo.length).toBe(4); // Ожидаем, что новая задача добавлена
  expect(updatedTodo[3].title).toBe('New');
  expect(result.current.todos[3].completed).toBe(false);
});

test('change todo status', () => {
  const { result } = renderHook(() => useTodos());
  act(() => {
    result.current.toggleTodo('id1');
  });
  const updatedTodo = result.current.todos.find((todo) => todo.id === 'id1');
  expect(updatedTodo.completed).toBe(false);
});

test('delete completed todos', () => {
  const { result } = renderHook(() => useTodos());
  act(() => {
    result.current.toggleTodo('id3');
    result.current.deleteCompletedTodos();
  });
  const completedTodos = result.current.todos.filter((todo) => todo.completed);
  expect(completedTodos).toHaveLength(0);
});

test('set filter', () => {
  const { result } = renderHook(() =>  useFilter());
  act(() => {
    result.current.setFilter('active');
  });
  expect(result.current.filter).toBe('active');
  act(() => {
    result.current.setFilter('completed');
  });
  expect(result.current.filter).toBe('completed');
});