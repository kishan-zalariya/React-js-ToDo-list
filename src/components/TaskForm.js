import React, { useContext, useState, useEffect } from 'react';
import { ToDoListContext } from '../context/ToDoListContext';

const TaskForm = () => {

    const { addTask, clearList, editItem, editTask } = useContext(ToDoListContext);

    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value);
        console.log(title);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (editItem === null) {
            addTask(title);
            setTitle("");
        } else {
            editTask(title, editItem.id);
        }
    };

    useEffect(() => {
        if (editItem !== null) {
            setTitle(editItem.title);
            console.log(editItem);
        } else {
            setTitle('');
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                onChange={handleChange}
                value={title}
                type="text"
                className="task-input"
                placeholder="Add Task..."
                required
            />

            <div className="buttons">
                <button type="submit" className="btn add-task-btn"> {editItem !== null ? "Edit Task" : "Add Task"}</button>

                <button onClick={clearList} className="btn clear-btn">Clear</button>
            </div>
        </form>
    )
}
export default TaskForm;