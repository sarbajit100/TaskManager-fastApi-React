import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoListView from './components/TodoListView';
const apiUrl = "http://52.91.203.123/api"


function App() {
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [updateMode, setUpdateMode] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');

  // Fetch all todos
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${apiUrl}/todo`);
      setTodoList(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  // Add a new todo
  const addTodoHandler = async () => {
    try {
      const response = await axios.post(`${apiUrl}/todo`, {
        title,
        description: desc,
      });
      console.log(response.data);
      setTitle("");
      setDesc("");
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Update a todo
  const updateTodoHandler = async () => {
    try {
      const response = await axios.put(`${apiUrl}/todo/${currentTitle}`, {
        title: title, // Send the new title if updating
        description: desc,
      });
      console.log(response.data);
      setTitle("");
      setDesc("");
      setUpdateMode(false);
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // Handle edit action
  const handleEdit = (todo) => {
    setCurrentTitle(todo.title);
    setTitle(todo.title); // Set the title when editing
    setDesc(todo.description);
    setUpdateMode(true);
  };

  return (
    <div className='App'>
    <h1 className=''>
      Task Manager
    </h1>
    <h6>
      React-FastAPI-Mongodb
    </h6>
    <h5>{updateMode ? 'Update Your Task' : 'Add Your Task'}</h5>
      <span>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Title"
          disabled={updateMode} // Disable title editing in update mode
        />
        <input
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
          type="text"
          placeholder="Description"
        />
        <button onClick={updateMode ? updateTodoHandler : addTodoHandler}>
          {updateMode ? 'Update Task' : 'Add Task'}
        </button>
        <h5>Your Tasks</h5>
        <div>
          <TodoListView todoList={todoList} onEdit={handleEdit} fetchTodos={fetchTodos} />
        </div>
    <h6>Copyright 2021, All rights reserved &copy;</h6>
    </span>
    </div>
  );
}

export default App;
