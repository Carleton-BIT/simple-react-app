import React, { Component } from "react";

// Starting todo items
let todoItems = [
  {id: 1, title: "Set up React", completed: true},
  {id: 2, title: "Finish ITEC 4012 Lecture", completed: false},
  {id: 3, title: "Be extremely cool", completed: true},
];

class App extends Component {
  // Constructor method is called when a new instance of App is created.
  constructor(props) {
    super(props); // This calls the constructor of the parent class (Component).
    // Initialize the state of the component.
    this.state = {
      todoList: todoItems, // Stores the array of to-do items.
    }
  }

  renderItems = () => {
    const todoList = this.state.todoList;
    const listItems = [];

    for (let i = 0; i < todoList.length; i++) {
      let item = todoList[i];
      let todoTitle = item.title;

      if (item.completed) {
        todoTitle += " (done)";
      }

      // .push() appends to the end of an array
      listItems.push(
          <li
              // Key is an attribute used by React (it's not standard in HTML)
              // It's used by React to identify items in a list, so React can change,
              // add, and remove different elements. Keys must be unique.
              key={item.id}
          >
            <span title={item.description}>{todoTitle}</span>
          </li>
      );
    }

    return listItems;
  };

  render() {
    // This is the same as:
    // const newItemText = this.state.newItemText;
    // const todoList = this.state.todoList;
    return (
        <ul>
          {this.renderItems()}
        </ul>
    );
  }
}

export default App;
