import React from "react";
import { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [plc, setPlc] = useState("");
  const [des, setDes] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!plc || !des) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(plc, des);
      setPlc("");
      setDes("");
    }
  };

  return (
    <div className="container my-3">
      <h3>ADD A TODO</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="plc" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={plc}
            onChange={(e) => {
              setPlc(e.target.value);
            }}
            className="form-control"
            id="plc"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="des" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={des}
            onChange={(e) => {
              setDes(e.target.value);
            }}
            className="form-control"
            id="des"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
