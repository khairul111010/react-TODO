import React from "react";
import { Todo } from "./Todo";
export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className=" my-3">Todo - LIST</h3>
      {props.todos.length === 0
        ? "Nothing TO DO :v"
        : props.todos.map((todo) => {
            return (
              <>
                <Todo todo={todo} key={todo.no} onDelete={props.onDelete} />
                <hr />
              </>
            );
          })}
    </div>
  );
};
