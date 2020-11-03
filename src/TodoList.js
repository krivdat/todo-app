import React, { useState, useEffect } from 'react';
import InsertForm from './InsertForm.js';
import ListItems from './ListItems.js';

export default function TodoList() {
  const [todoItems, setTodoItems] = useState(
    JSON.parse(localStorage.getItem('todoList')) || []
  );
  const [inputDesc, setInputDesc] = useState('');
  const [validation, setValidation] = useState('');

  useEffect(() => {
    if (todoItems.length === 0) {
      document.title = 'TODO App - empty';
    } else {
      document.title = `TODO App - ${todoItems.length} items`;
    }
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
      },
    ];
    setTodoItems(todoItemsNew);
    setInputDesc('');
    setValidation('');
    localStorage.setItem('todoList', JSON.stringify(todoItemsNew));
  }

  function handleDeleteTask(id) {
    const todoItemsNew = todoItems.filter((item) => item.id !== id);
    setTodoItems(todoItemsNew);
    localStorage.setItem('todoList', JSON.stringify(todoItemsNew));
  }

  function handleDeleteAll() {
    setTodoItems([]);
    localStorage.removeItem('todoList');
  }

  function handleInputChange(e) {
    setInputDesc(e.target.value);
    setValidation('');
  }

  return (
    <div className="todo-list">
      <InsertForm
        inputDesc={inputDesc}
        validation={validation}
        onInsertSubmit={handleInsertSubmit}
        onInputChange={handleInputChange}
      />

      <div className="filter-form hidden">filter-form</div>

      <ListItems
        todoItems={todoItems}
        onDeleteTask={handleDeleteTask}
        onDeleteAll={handleDeleteAll}
      />
    </div>
  );
}
