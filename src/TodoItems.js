import React from "react";
import FlipMove from "react-flip-move";

class TodoItems extends React.Component {
  constructor(props) {
    super(props);

    this.createTasks= this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      <li className="todoList--list--item" key={item.key}>
        <input className="todoList--list--checkbox" type="checkbox" id={item.key}></input>
        <label className="todoList--list--label" htmlFor={item.key}><span>{item.text}</span></label>
        <button className="todoList--list--delete" onClick={() => this.delete(item.key)}><i className="fa fa-times" aria-hidden="true"></i></button>
      </li>
    )
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="todoList--list">
        <FlipMove duration={250} easing="ease-out" enterAnimation="fade">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};

export default TodoItems;
