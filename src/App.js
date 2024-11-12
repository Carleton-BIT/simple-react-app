import React, { useState, useEffect } from "react";
import { fetchTasks, handleAddItem } from './services/ToDoApi.js'
import TodoItem from './components/TodoItem.js'
import AddTask from './components/AddTask.js'

const App = () => {
  const [todoList, setTodoList] = useState([]);


  const addItem = (description) => {
    handleAddItem(description).then(newTask => {
      setTodoList([...todoList, newTask]);
    })
  }
  // Function to add an item

  useEffect(() => {
    fetchTasks().then(tasks => {
      setTodoList(tasks);
    });
    }, []);

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
          <TodoItem item={item} onDelete={deleteItem}/>
      );
    }

    return listItems;
  };

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-6 col-sm-10 mt-4 mx-auto p-0">
          <div className="card p-3">
              <AddTask onAdd={addItem}/>
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