import React, { createContext, useState, useEffect } from 'react';
import { v1 as uuid } from "uuid";

export const ToDoListContext = createContext();

const ToDoListContextProvider = (props) => {

    const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

    const [tasks, setTasks] = useState(initialState);

    const [editItem, setEditItem] = useState(null);

    /* Just for test */
    const [isLoggedIn, SetIsLoggedIn] = useState(false);

    const login = ()=>{
        SetIsLoggedIn(true);
    }
    const logout = ()=>{
        SetIsLoggedIn(false);
    }
    /* End test */

    // Items store in localStorage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    

    // Add tasks
    const mockTask = {title:"read book",id:1};
    const addTask = title => {
        setTasks([...tasks, { title, id: uuid() }]);        
    }

    // Remove tasks
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    // Clear list
    const clearList = () => {
        setTasks([]);
    }

    const findItem = id => {
        const item = tasks.find(task => task.id === id);
        setEditItem(item);
        // console.log(item);
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task));
        setTasks(newTasks);
        setEditItem(null);
    }

    return (
        <ToDoListContext.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                clearList,
                findItem,
                editTask,
                editItem,
                isLoggedIn,
                login,
                logout                
            }}
        >
            {props.children}
        </ToDoListContext.Provider>
    )
}

export default ToDoListContextProvider;