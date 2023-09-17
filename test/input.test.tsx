import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../src/components/ui/input';
import { describe, test, expect, vi, beforeEach } from 'vitest';

describe('Input', () => {
  const testId = 'sadafqweq'
  const changeHadler = vi.fn();
  const className = 'custom-class';
  const valueToType = 'Hello, World!';
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    render(<Input onChange={changeHadler} className={className}/>);
    inputElement = screen.getByTestId(testId);
  })

  test('renders an input element', () => {
    expect(inputElement).toBeInTheDocument();
  });

  test('applies the provided className', () => {
    expect(inputElement).toHaveClass(className);
  });

  test('changes the input value when typed into', () => {
    render(<Input />);
    fireEvent.change(inputElement, { target: { value: valueToType } });
    expect(inputElement).toHaveValue(valueToType);
  });

  test('calls the provided onChange function when the input value changes', () => {
    const inputElement = screen.getByRole('textbox');
    const valueToType = 'New Value';
    userEvent.type(inputElement, valueToType);
    expect(changeHadler).toHaveBeenCalledTimes(1);
  });
});
