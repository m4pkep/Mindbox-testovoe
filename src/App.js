import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // фильтр задач

  const addTask = () => {
    if (inputValue.trim() === '') return;
    const newTask = { text: inputValue, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputValue('');
  };

  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const clearCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') 
      return task.completed;
    if (filter === 'active') 
      return !task.completed;
    return true; // олл
  });

  return (
    <div className="App">
      <h1>тудушник</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите новую задачу"
      />
      <button onClick={addTask}>Добавить задачу</button>

      <h2>Задачи</h2>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <span onClick={() => toggleTaskCompletion(index)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => removeTask(index)}>Удалить</button>
          </li>
        ))}
      </ul>

      <div className="filters">
        <button onClick={() => setFilter('all')}>Все</button>
        <button onClick={() => setFilter('active')}>Активные</button>
        <button onClick={() => setFilter('completed')}>Выполненные</button>
        <button onClick={clearCompletedTasks}>Очистить выполненные</button>
      </div>

      <div className="task-count">
        Осталось задач: {tasks.filter(task => !task.completed).length}
      </div>
    </div>
  );
};

export default App;