import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import TodoList from "./TodoList";

var dest = document.getElementById("root");

ReactDOM.render(
  <div className="app">
    <TodoList/>
  </div>,
  dest
);
