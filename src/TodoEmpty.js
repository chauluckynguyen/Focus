import React from "react";

class TodoEmpty extends React.Component {
  render() {
    return (
      <div className="todoList--empty-state">
        <div className="todoList--empty-state--row">
          <i className="fa fa-heart todoList--empty-state--icon" aria-hidden="true"></i>
        </div>
        <div className="todoList--empty-state--row">
          <h1 className="todoList--empty-state--header">You have no tasks for today.</h1>
        </div>
        <div className="todoList--empty-state--row">
          <p className="todoList--empty-state--descrip">Enjoy your day!</p>
        </div>
      </div>
    )
  }
}

export default TodoEmpty;
