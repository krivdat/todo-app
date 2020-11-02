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

        <div className="form-footer">
          <div className="form-validation">{props.validation}</div>
          <button className="btn btn-submit" type="submit">
            Insert task
          </button>
        </div>
      </form>
    </div>
  );
}
