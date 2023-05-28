import React, { useState } from 'react'


function TodoForm({addTodo}) {


const [value, setValue] = useState('')

const handleSubmit = (e) => {
e.preventDefault();

addTodo(value)
setValue('')
}

  return (
    <div className='block'>
        <form onSubmit={handleSubmit}>

            <input
            className='form-input'
            type='text'
            value={value}
            placeholder='What are you going to do?'
            onChange={(e) => setValue(e.target.value) }/> 

            <button 
            className='form-btn'
            type='submit'>Add task
            </button>   

        </form>
    </div>
  )
}

export default TodoForm