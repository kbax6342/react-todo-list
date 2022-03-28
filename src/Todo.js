import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
  return (

    <div>
        <label className="text">
            <input className='mr-1' type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
            {todo.name}
        </label>
    </div>
  )
}
