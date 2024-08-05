import React from 'react'
import { UseTodo } from '../context'
import SingleTodo from './SingleTodo';

function AllTodos() {
    const {Todo , updateTodo, deleteTodo , markTodo} = UseTodo();
    console.log(Todo);
  return (
    <div className='flex flex-col  h-3/4 w-11/12 items-center bg-red-100 rounded-xl justify-normal shadow-orange-900 border-solid border-white border-2 overflow-y-auto'>
    { Todo.map((todo)=>(
        <SingleTodo msg={todo.msg} id={todo.id} />
     ))}
    </div> 
  )
}

export default AllTodos
