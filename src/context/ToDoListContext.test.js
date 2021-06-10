import React, { useContext } from 'react';
import { ToDoListContext, ToDoListContextProvider } from './ToDoListContext';
import { mount } from '../enzyme';

describe('login', () => {
    it('sets isLoggedIn status to true',()=>{
        const TestComponent = () => {
            const { login, isLoggedIn } = useContext(ToDoListContext);

            return <>
                <div data-testid="value">{isLoggedIn.toString()}</div>
                <button onClick={login}>Login</button>
            </>
        }

        const wrapper = mount (
            <ToDoListContextProvider>
                <TestComponent />
            </ToDoListContextProvider>
        );

        console.log(wrapper);
        
                
    });
})


// describe("addTask", () => {

//     it("should add new task", () => {

//         const TestComponent = () => {
//             const { addTask, tasks } = useContext(ToDoListContext);

//             return <>
//                 <div data-testid="value">{tasks}</div>
//                 <button onClick={addTask}>Add Task</button>
//             </>
//         }

//         const wrapper = mount(
//             <ToDoListContextProvider>
//                 <TestComponent />
//             </ToDoListContextProvider>
//         );
//         console.log(wrapper);

//         //expect(wrapper.find(['data-testid="value"']).text()).toEqual([]);

//         // wrapper.find('button').simulate('click');

//         // expect(wrapper.find(['data-testid="value"']).text()).toEqual([{title:"read book",id:1}]);
//     });
// });