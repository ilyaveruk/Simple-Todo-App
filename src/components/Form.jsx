import React from 'react'

//how to start the project?
//cd my-app => npm start
const Form = ({setInputText , todos , setTodos, inputText, setStatus}) => {
    const inputTextHandler = (e) => {
        //console.log(e.target.value);  //e.target.value gives us the actual data from the event 
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault(); // preventing the refresh of the page once + is clicked(have to be assigned to button)
        
        if(inputText === ""){
            alert("Please enter an assigment");
            return;
        }

        setTodos([
            ...todos,{text:inputText,completed: false, id:Math.random()*1000},  //...todos mean if there already elements in the array so pass it either, and {..} means a new element also
        ]);
        setInputText(""); // to delete the string after clicking + we need to pass it as value to the input (line 18)


    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            

            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value = "all">All</option>
                    <option value = "completed">Completed</option>
                    <option value = "uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );
};

export default Form;
