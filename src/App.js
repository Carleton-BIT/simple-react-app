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
      showAddItemInput: false, // Controls the visibility of the add item input.
      newItemText: '', // Holds the current value of the add item text input.
    }
  }

  // Function to handle input text change
  // e represents the event object that is passed to the function when the event occurs
  handleInputChange = (e) => {
    this.setState({ newItemText: e.target.value });
  }

  // Function to add an item
  addItem = () => {
    const { newItemText, todoList } = this.state;
    const newItem = {
      // Sets ID as a random number between 1 and 100,000
      // If you get unlucky, two items will have the same ID
      // For that reason, this is NOT a smart solution
      // https://en.wikipedia.org/wiki/Birthday_problem
      // With just 200 items, there is a 20% chance any two have the same ID!
      id: Math.floor(Math.random() * 100000) + 1,
      title: newItemText,
      completed: false,
    };

    this.setState({
      todoList: [...todoList, newItem],
      newItemText: '', // Clear the input after adding
      showAddItemInput: false, // Hide the input box after adding
    });
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
    // This is the same as:
    // const newItemText = this.state.newItemText;
    // const todoList = this.state.todoList;
    const { showAddItemInput, newItemText } = this.state;

    return (
        <main className="container">
          <div className="row">
            <div className="col-md-6 col-sm-10 mt-4 mx-auto p-0">
              <div className="card p-3">
                <div className="mb-4">
                  {showAddItemInput ? (
                      <>
                        <input
                            type="text"
                            className="form-control mb-2"
                            value={newItemText}
                            onChange={this.handleInputChange}
                            placeholder="Enter task description"
                        />
                        <button
                            className="btn btn-success"
                            onClick={this.addItem}
                        >
                          Submit
                        </button>
                        <button
                            className="btn btn-secondary ml-2"
                            onClick={() => this.setState({ showAddItemInput: false })}
                        >
                          Cancel
                        </button>
                      </>
                  ) : (
                      <button
                          className="btn btn-primary"
                          onClick={() => this.setState({ showAddItemInput: true })}
                      >
                        Add task
                      </button>
                  )}
                </div>
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
