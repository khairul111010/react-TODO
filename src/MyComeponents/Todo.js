import React from "react";

export const Todo = ({ todo, onDelete }) => {
  return (
    <>
      <div>
        <h4>{todo.no}</h4>
        <h4>{todo.plc}</h4>
        <h4>{todo.des}</h4>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};
