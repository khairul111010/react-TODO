import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComeponents/Header";
import { Todos } from "./MyComeponents/Todos";
import { AddTodo } from "./MyComeponents/AddTodo";
import { Footer } from "./MyComeponents/Footer";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./MyComeponents/About";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I AM DELETE", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (plc, des) => {
    let no;
    if (todos.length === 0) {
      no = 1;
    } else {
      no = todos[todos.length - 1].no + 1;
    }

    const myTodo = {
      no: no,
      plc: plc,
      des: des,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Todo-List" searchBar={true} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
