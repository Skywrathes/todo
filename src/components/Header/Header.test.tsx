/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Header from './Header.tsx';
import { describe, test, expect } from 'vitest';

describe('Header', () => {
  test('renders the header component', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the title "My Todos"', () => {
    render(<Header />);
    const titleElement = screen.getByRole('heading', { level: 1, name: /My Todos/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the LucideReact ListTodo icon', () => {
    render(<Header />);
    const iconElement = screen.getByTestId('list-todo-icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('renders the ModeToggle component', () => {
    render(<Header />);
    const modeToggleElement = screen.getByTestId('mode');
    expect(modeToggleElement).toBeInTheDocument();
  });
});
