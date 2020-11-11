import React, { useState, useEffect } from 'react';
import InsertForm from './InsertForm.js';
import ListItems from './ListItems.js';

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [inputDesc, setInputDesc] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('default');
  const [validation, setValidation] = useState(true);

  // load data from localstorage on first run
  useEffect(() => {
    setTodoItems(JSON.parse(localStorage.getItem('todoList')) || []);
  }, []);

  // store updated data to localstorage
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoItems));
  }, [todoItems]);

  function handleInsertSubmit(e) {
    e.preventDefault();

    if (!inputDesc) {
      setValidation('Task description cannot be empty!');
      return;
    }

    const todoItemsNew = [
      ...todoItems,
      {
        id: Date.now(),
        desc: inputDesc,
        category: selectedCategory,
      },
    ];
    setTodoItems(todoItemsNew);
    setInputDesc('');
    setValidation('');
  }

  function handleDeleteTask(id) {
    const todoItemsNew = todoItems.filter((item) => item.id !== id);
    setTodoItems(todoItemsNew);
  }

  function handleDeleteAll() {
    setTodoItems([]);
  }

  function handleInputChange(e) {
    setInputDesc(e.target.value);
    setValidation('');
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  return (
    <div className="todo-list">
      <InsertForm
        inputDesc={inputDesc}
        validation={validation}
        onInsertSubmit={handleInsertSubmit}
        onInputChange={handleInputChange}
        onCategoryChange={handleCategoryChange}
      />

      <div className="filter-form hidden">filter-form</div>

      <ListItems
        todoItems={todoItems}
        selectedCategory={selectedCategory}
        onDeleteTask={handleDeleteTask}
        onDeleteAll={handleDeleteAll}
      />
    </div>
  );
}
