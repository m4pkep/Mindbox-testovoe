import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('тудушник', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('рендер ввода и кнопки', () => {
    expect(screen.getByPlaceholderText(/Введите новую задачу/i)).toBeInTheDocument();
    expect(screen.getByText(/Добавить задачу/i)).toBeInTheDocument();
  });

  test('добавление задачи пользователем', () => {
    const inputElement = screen.getByPlaceholderText(/Введите новую задачу/i);
    fireEvent.change(inputElement, { target: { value: 'новая задача' } });
    fireEvent.click(screen.getByText(/Добавить задачу/i));

    expect(screen.getByText(/Новая задача/i)).toBeInTheDocument();
  });

  test('завершение задачи пользователем', () => {
    const inputElement = screen.getByPlaceholderText(/Введите новую задачу/i);
    fireEvent.change(inputElement, { target: { value: 'задача для завершения' } });
    fireEvent.click(screen.getByText(/Добавить задачу/i));

    const taskElement = screen.getByText(/Задача для завершения/i);
    fireEvent.click(taskElement);

    expect(taskElement).toHaveStyle('text-decoration: line-through');
  });

  test('удаление задачи юзером', () => {
    const inputElement = screen.getByPlaceholderText(/Введите новую задачу/i);
    fireEvent.change(inputElement, { target: { value: 'задача для удаления' } });
    fireEvent.click(screen.getByText(/Добавить задачу/i));

    fireEvent.click(screen.getByText(/Удалить/i));

    expect(screen.queryByText(/Задача для удаления/i)).not.toBeInTheDocument();
  });

  test('фильтрация задач юзером', () => {
    const inputElement = screen.getByPlaceholderText(/Введите новую задачу/i);
    fireEvent.change(inputElement, { target: { value: 'активная задача' } });
    fireEvent.click(screen.getByText(/Добавить задачу/i));
    fireEvent.change(inputElement, { target: { value: 'выполненная задача' } });
    fireEvent.click(screen.getByText(/Добавить задачу/i));

    fireEvent.click(screen.getByText(/Выполненная задача/i)); // Завершаем задачу

    fireEvent.click(screen.getByText(/Активные/i));
    expect(screen.getByText(/Активная задача/i)).toBeInTheDocument();
    expect(screen.queryByText(/Выполненная задача/i)).not.toBeInTheDocument();
  });
});