import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoListView from './components/TodoListView';
const apiUrl = process.env.REACT_APP_API_URL;


function App() {
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  // read all todos
  useEffect(()=> {
    axios.get(`${apiUrl}/todo`)
    .then(res => {
      setTodoList(res.data)
    })
  });

  // post a todo
  const addTodoHandler = () => {
    axios.post(`${apiUrl}`, {'title':title, 'description': desc})
    .then(res => console.log(res))
  };
  return (
    <div className='App'>
    <h1 className=''>
      Task Manager
    </h1>
    <h6>
      React-FastAPI-Mongodb
    </h6>
    <h5>Add Your Task</h5>
    <span>
    <input onChange={event => setTitle(event.target.value)} type="text" placeholder='Title' />
    <input onChange={event => setDesc(event.target.value)} type="text" placeholder='Description' />
    <button onClick={addTodoHandler}>Add Task</button>
    <h5>Your Tasks</h5>
    <div>
      <TodoListView todoList={todoList} />
    </div>
    <h6>Copyright 2021, All rights reserved &copy;</h6>
    </span>
    </div>
  );
}

export default App;
