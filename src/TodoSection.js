import React from "react";
import TodoItems from "./TodoItems";
import TodoEmpty from "./TodoEmpty";


function TodoSection(props) {
  const isEmptyState = props.isEmptyState;

  if(isEmptyState) {
    console.log("empty!")
    return <TodoEmpty />;
  }
  console.log("ain't empty");
  return <TodoItems entries={props.items} delete={props.deleteItem} />;
}

export default TodoSection;
