import React, { useState, useEffect } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [showAddItemInput, setShowAddItemInput] = useState(false);
  const [newItemText, setNewItemText] = useState('');

  // Function to handle input text change
  const handleInputChange = (e) => setNewItemText(e.target.value);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(tasks => {
        setTodoList(tasks);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  // Function to add an item
  const addItem = () => {
    fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: newItemText,
      }),
    })
      .then(response => response.json())
      .then(newTask => {
        setTodoList([...todoList, newTask]);
        setNewItemText(''); // Clear the input after adding
        setShowAddItemInput(false); // Hide the input box after adding
      })
      .catch(error => {
        console.error('There has been a problem with your add operation:', error);
      });
  };
  // Function to delete an item
  const deleteItem = (id) => {
    const filteredItems = todoList.filter(item => item.id !== id);
    setTodoList(filteredItems);
  };

  const renderItems = () => {
    const listItems = [];
    
    for (let i = 0; i < todoList.length; i++) {
      let item = todoList[i];
      let todoTitle = item.description + (item.completed ? " (done)" : "");

      listItems.push(
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span title={item.description}>{todoTitle}</span>
          <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
            Delete
          </button>
        </li>
      );
    }

    return listItems;
  };


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
                    onChange={handleInputChange}
                    placeholder="Enter task description"
                  />
                  <button className="btn btn-success" onClick={addItem}>
                    Submit
                  </button>
                  <button
                    className="btn btn-secondary ml-2"
                    onClick={() => setShowAddItemInput(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => setShowAddItemInput(true)}
                >
                  Add task
                </button>
              )}
            </div>
            <ul className="list-group list-group-flush border-top-0">
              {renderItems()}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;