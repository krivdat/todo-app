import React, { useState } from 'react';

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [inputDesc, setInputDesc] = useState('');
  const [validation, setValidation] = useState('');

  if (todoItems.length === 0) {
    const localItems = JSON.parse(localStorage.getItem('todoList'));
    localItems && setTodoItems(localItems);
  }

  function handleInsertSubmit(e) {
    e.preventDefault();

    if (!inputDesc) {
      setValidation('Task description cannot be empty!');
      return;
    }

    const todoItemsNew = [
      ...todoItems,
      {
        id: new Date(),
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
    localStorage.setItem('todoList', JSON.stringify([]));
  }

  function handleInputChange(e) {
    setInputDesc(e.target.value);
    setValidation('');
  }

  return (
    <div className="todo-list">
      <div className="insert-form">
        <form onSubmit={handleInsertSubmit}>
          <label className="input-label" htmlFor="task-desc">
            Task description:
          </label>
          <input
            className="input-text"
            type="text"
            id="task-desc"
            name="task-desc"
            value={inputDesc}
            onChange={(e) => handleInputChange(e)}
          />

          <div className="form-footer">
            <div className="form-validation">{validation}</div>
            <button className="btn btn-submit" type="submit">
              Insert task
            </button>
          </div>
        </form>
      </div>
      <div className="filter-form hidden">filter-form</div>
      <div className="list-items">
        <ul>
          {todoItems.map((item) => (
            <li key="item.id">
              <span className="item-description">{item.desc}</span>
              <span
                className="icon icon-delete"
                onClick={() => handleDeleteTask(item.id)}
                alt="delete task"
              ></span>
            </li>
          ))}
        </ul>
        <div className="list-footer">
          <button className="btn btn-danger" onClick={handleDeleteAll}>
            delete all tasks
          </button>
        </div>
      </div>
    </div>
  );
}
