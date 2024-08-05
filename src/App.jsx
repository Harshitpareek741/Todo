import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TodoProvider } from './context';
import AllTodos from './component/AllTodos';
import SearchBar from './component/SearchBar';

function App() {
  const [Todo , setTodo] = useState([]);

  const addTodo = (msg) => {
     setTodo([...Todo,{id:Date.now(),msg:msg , onDone:false}]);
  }
  const updateTodo = (id, msg) => {
    setTodo(Todo.map(todo =>
      todo.id === id ? { id, msg, onDone: true } : todo
    ));
  };
  const deleteTodo = (id) => {
    const updatedTodos = Todo.filter(todo => todo.id !== id);
    setTodo(updatedTodos);
  }
  const markTodo = (id) => {
    Todo.map((key) => {
      if(key.id==id)key.onDone = !key.onDone;
    })
  }

  return (
    <TodoProvider value={{Todo,setTodo, addTodo,updateTodo , deleteTodo,markTodo}}>
    <div className='bg-white h-screen w-screen flex flex-col justify-center items-center m-0 p-0'>
    <div className='flex flex-col  bg-blue-900 justify-evenly h-full w-full md:h-3/4 md:w-3/5 items-center rounded-xl'>
      <SearchBar/>
      <AllTodos/>
     </div>
    </div>
    
    </TodoProvider>
  )
}

export default App
