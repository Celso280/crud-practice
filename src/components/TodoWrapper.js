import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';

uuidv4();

function TodoWrapper() {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }

  return (
    <div className='todo-wrapper'>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
            <Todo list={todo} key={index}/>
        ))}
    </div>
  )
}

export default TodoWrapper