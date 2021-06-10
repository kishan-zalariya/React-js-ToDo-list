import React, { useContext } from 'react';
import { ToDoListContext } from '../context/ToDoListContext';

const Task = ({ task }) => {

    const { removeTask, findItem } = useContext(ToDoListContext);

    return (
        <li className="list-item">
            <span>{task.title}</span>

            <div>
                <button onClick={() => removeTask(task.id)} className="btn-delete task-btn">
                    <i className="fa fa-trash"></i>
                </button>
                <button onClick={() => findItem(task.id)} className="btn-edit task-btn">
                    <i className="fa fa-pencil"></i>
                </button>
            </div>
        </li>
    )
}

export default Task;
