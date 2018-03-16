import React from "react";
// import TodoItems from "./TodoItems";
import TodoSection from "./TodoSection";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isEmptyState : true
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if(this._inputElement.value !== "") {

      // Creates a new item with a unique key (Current Time)
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      // Does not modify state object; Giving new array with existing and new data
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this.setState(() => {
        return {
          isEmptyState: false
        }
      });

      console.log(this.state.isEmptyState);

      this._inputElement.value = "";
    }

    // Prevents page reload on form submission
    e.preventDefault();
  }

  deleteItem(key) {
    // New array that contains everything except for the item we deleted
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    const{isEmptyState, items} = this.state;

    return (
      <div className="todoList">
        <form onSubmit={this.addItem}>
          <div className="todoList--input">
            <label className="todoList--input--label">Create New Task</label>
            <div className="todoList--input--container">
              <input ref={(e) => this._inputElement = e} placeholder="enter task" className="todoList--input--field"></input>
              <button className="todoList--input--btn" type="submit">Add</button>
            </div>
          </div>
        </form>
        <TodoSection isEmptyState={isEmptyState} items={items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default TodoList;
