import React from 'react';

export default function ListItems(props) {
  if (props.todoItems.length > 0) {
    return (
      <div className="list-items">
        <ul>
          {props.todoItems
            .filter((item) => item.category === props.selectedCategory)
            .map((item) => (
              <li key={item.id}>
                <span className="item-description">{item.desc}</span>
                <span
                  className="icon icon-delete"
                  onClick={() => props.onDeleteTask(item.id)}
                  alt="delete task"
                ></span>
              </li>
            ))}
        </ul>
        <div className="list-footer">
          <button className="btn btn-danger" onClick={props.onDeleteAll}>
            delete all tasks
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
