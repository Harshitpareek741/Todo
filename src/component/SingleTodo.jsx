import React, { useState } from 'react';
import { UseTodo } from '../context';

function SingleTodo({ msg ,id }) {
    const {updateTodo,deleteTodo} = UseTodo();
    const [inpVal,setinpVal] = useState(msg);
    const [onEdit , setOnEdit] = useState(true)
  return (
    <div className='flex flex-row my-2 bg-yellow-200 w-11/12 h-1/6 items-center justify-evenly'>
      <input 
        type="text"
        value={!onEdit ? inpVal : msg}
        className='h-4/6 w-3/4 border-solid border-black border-2 rounded-2xl box-border'
        disabled={onEdit} onChange={(e)=>{setinpVal(e.target.value); updateTodo(id,e.target.value); }}
      />
      <div className='flex flex-col mx-3'>
        <button onClick={()=>{setOnEdit(!onEdit);}}
          className='bg-white rounded-md font-serif px-3 py-1 border-2 border-transparent hover:bg-green-500 hover:font-extralight hover:border-white'
        >
          {onEdit?'Edit':'Save'}
        </button>
        <button  onClick={()=>{deleteTodo(id);}}
          className='bg-red-500 rounded-md font-serif px-3 py-1 border-2 border-transparent hover:bg-green-500 hover:font-extralight hover:border-white'
        >
          Del
        </button>
      </div>
    </div>
  );
}

export default SingleTodo;
