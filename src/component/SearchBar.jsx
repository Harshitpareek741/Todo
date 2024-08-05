import React, { useContext, useState } from 'react'
import { UseTodo } from '../context';

function SearchBar() {
    const {addTodo} = UseTodo();
    const [msg , setMsg] = useState('');
  return (
    <div className='flex flex-row justify-evenly w-full '>
    <input type="text" onChange={(e)=>setMsg(e.target.value)} className='border-solid border-black border-2 rounded-md w-3/4 h-10' />
   <button  className='bg-yellow-300 rounded-md font-serif px-3 py-2 hover:bg-green-500 hover:font-extralight ' onClick={()=>{addTodo(msg); }} >ADD</button>
    </div>
  )
}

export default SearchBar
