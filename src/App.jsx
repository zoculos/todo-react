/* eslint-disable react/jsx-key */
import { useState } from 'react'
import './App.css';
import Todo from './components/Todo'
import TodoForm  from './components/TodoForm';
function App() {
const [todos,setTodos]= useState([
  {id:1,text:"Criar Funcionalidade X no Sistema",category:"Trabalho",isCompleted:false},
  {id:2,text:"Ir para a Academia",category:"Pessoal",isCompleted:false},
  {id:3,text:"Estudar React",category:"Estudos",isCompleted:false},
]);

const addTodo = (text,category) => {
  const newTodos = [
    ...todos,
    {id: Math.floor(Math.random()*10000), 
      text, 
      category, 
      isCompleted:false, 
    },
  ];
  setTodos(newTodos);
}


return <div className='app'>
  <h1> Lista de tarefas</h1> 
  <div className='todo-list'> 
    {todos.map((todo)=>(
    <Todo key={todo.id} todo={todo } />
    ))}</div>
    <TodoForm addTodo={addTodo}/>

</div>
}

export default App
