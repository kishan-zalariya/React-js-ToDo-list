import React from 'react';
import '../App.css';
import TaskList from './TaskList';
import ToDoListContextProvider from '../context/ToDoListContext';
import TaskForm from './TaskForm';
import Header from './Header';
import MyDemo from './MyDemo';

const App = () => {
    return (
        <ToDoListContextProvider >
            <div className="container">
                <div className="app-wrapper">
                    <div className="main">
                        <Header headerTitle={"ToDo List"}/>
                        <TaskForm />
                        <TaskList />                        
                        
                        <MyDemo />
                    </div>
                </div>
            </div>
        </ToDoListContextProvider>
    )
}

export default App;