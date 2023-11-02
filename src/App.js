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
              className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span title={item.description}>{todoTitle}</span>
            <button className="btn btn-danger" onClick={() => this.deleteItem(item.id)}>
                Delete
            </button>
          </li>
      );
    }

    return listItems;
  };

  // Function to delete an item
  deleteItem = (id) => {
    // Filter creates a new array with all elements that pass the test implemented by the provided function
    // Here the arrow function is "item => item.id !== id"
    // This is equivalent to
    // function myFunction(item, id) {
    //   if item.id !== id {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
    const filteredItems = this.state.todoList.filter(item => item.id !== id);
    this.setState({ todoList: filteredItems });
  }

  render() {
    return (
        <main className="container">
          <div className="row">
            <div className="col-md-6 col-sm-10 mt-4 mx-auto p-0">
              <div className="card p-3">
                <ul className="list-group list-group-flush border-top-0">
                  {this.renderItems()}
                </ul>
              </div>
            </div>
          </div>
        </main>
    );
  }
}

export default App;
