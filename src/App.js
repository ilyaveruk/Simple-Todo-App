import React , {useState , useEffect} from 'react'
import './App.css';
//import components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  //states stuff
  const [inputText,setInputText]=useState(""); 
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once when app starts 
  useEffect(() => {
    getLocalTodos();
  },[]);

  //useEffect
  useEffect(()=> {
    filterHandler();
    saveLocalTodos();
  },[todos,status]); // what is in array is the use effect toggle the function when 'todos' and 'status' is updated

  // functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted': 
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;  
    }
  };

  //save to local
const saveLocalTodos = () => {
  
    localStorage.setItem('todos', JSON.stringify(todos));
  
};

const getLocalTodos = () => {
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos' , JSON.stringify([]));

  }else{
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  }
};

  return (
    <div className="App">
      <header>
        <h1>Ilya's Todo List</h1>
      </header>
      <h3>Welcome to my portfolio</h3>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos = {todos}/>
    </div>
  );
}

export default App;
 
//stopped the tutorial in 19:10 with finished on Form file / e.target.value