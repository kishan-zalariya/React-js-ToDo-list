import React, { useContext } from 'react';
import { ToDoListContext } from '../context/ToDoListContext';

{/* Just for testing */}

const MyDemo = () => {

    const { isLoggedIn, login, logout } = useContext(ToDoListContext);

    return (
        <div className="no-tasks">            
            *** Just For Testing *** <br/>
            {isLoggedIn.toString()}<br/>
            <button onClick={login}>Login</button> {" "}
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default MyDemo;