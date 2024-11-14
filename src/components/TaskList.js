import React, { useState, useEffect } from "react";
import { fetchTasks, handleAddItem } from '../services/ToDoApi.js';
import TodoItem from './TodoItem.js';
import AddTask from './AddTask.js';

const TaskList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetchTasks().then(tasks => setTodoList(tasks));
  }, []);

  const addItem = (description) => {
    handleAddItem(description).then(newTask => setTodoList([...todoList, newTask]));
  };

  const deleteItem = (id) => {
    const filteredItems = todoList.filter(item => item.id !== id);
    setTodoList(filteredItems);
  };

  const renderItems = () => {
    return todoList.map((item) => (
      <TodoItem key={item.id} item={item} onDelete={deleteItem} />
    ));
  };

  return (
    <div className="row">
      <div className="col-md-6 col-sm-10 mt-4 mx-auto p-0">
        <div className="card p-3">
          <AddTask onAdd={addItem} />
          <ul className="list-group list-group-flush border-top-0">
            {renderItems()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
