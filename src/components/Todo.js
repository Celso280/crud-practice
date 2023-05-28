import React from 'react'
import { FiEdit, FiTrash } from "react-icons/fi";

function Todo({list}) {
  return (
    <div className='todo'>    
        <p>{list.task}</p>
        <div>
            <FiEdit/>
            <FiTrash/>
        </div>     
    </div>
  )
}

export default Todo