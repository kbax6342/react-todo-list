import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';
import React, { useState, useRef, useEffect } from 'react'



 const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // const [todos, setTodos] = useState([{
  //   id:'1',
  //   name: 'Todo 1',
  //   complete: false}])
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if(storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id){
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === id)
      todo.complete = !todo.complete
      setTodos(newTodos)

    }

    function handleAddTodo(e){
      const name = todoNameRef.current.value
     if(name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: Math.random(10) , name: name, complete: false}]
   
      }) 
     todoNameRef.current.value = null
    }

    function handleClearTodos(){
      const newTodos = todos.filter(todo => !todo.complete)
      setTodos(newTodos)
    }
  return (
  
    <div className="App">
   
      <ToDoList todos={todos} toggleTodo={toggleTodo}></ToDoList> 
     <input type="text" ref={todoNameRef}></input>
     <button onClick={handleAddTodo}>Add Todo</button>
     <button onClick={handleClearTodos}>Clear Complete</button>
     <div>{todos.filter(todo => !todo.complete).length} left to do </div>
    </div>
  );
}

export default App;
