import React, { useState } from "react";

const AddTask = ( {onAdd} ) => {
    const [showAddItemInput, setShowAddItemInput] = useState(false);
    const [newItemText, setNewItemText] = useState('');
    const handleInputChange = (e) => setNewItemText(e.target.value);

    const addTask = () => {
        onAdd(newItemText);
        setNewItemText('');
        setShowAddItemInput(false);
    }

    return (
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
                <button className="btn btn-success" onClick={addTask}>
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
    )

}

export default AddTask;