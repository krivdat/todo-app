import React from 'react';

export default function InsertForm(props) {
  return (
    <div className="insert-form">
      <form onSubmit={props.onInsertSubmit}>
        <label className="input-label" htmlFor="task-desc">
          Task description:
        </label>
        <input
          className="input-text"
          type="text"
          id="task-desc"
          name="task-desc"
          value={props.inputDesc}
          onChange={props.onInputChange}
        />

        <div className="form-validation">{props.validation}</div>

        <div className="form-footer">
          <label classname="input-label" htmlFor="cat-sel">
            Select list:
          </label>
          <select
            id="cat-sel"
            className="category-selector"
            onChange={props.onCategoryChange}
          >
            <option value="main">default</option>
            <option value="shopping">shopping</option>
            <option value="coding">coding</option>
          </select>
          <button className="btn btn-submit" type="submit">
            Insert task
          </button>
        </div>
      </form>
    </div>
  );
}
