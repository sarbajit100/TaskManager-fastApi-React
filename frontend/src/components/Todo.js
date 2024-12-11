import React from "react";
import axios from "axios";
const apiUrl = "http://52.91.203.123/api"

function TodoItems(props) {
  const deleteTodoHandler = async (title) => {
    try {
      const response = await axios.delete(`${apiUrl}/todo/${title}`);
      console.log(response.data);
      props.fetchTodos(); // Refresh the todo list
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
        return (
          <div>
        <p>
        <span>{props.todo.title}:</span> {props.todo.description}
        <button onClick={() => deleteTodoHandler(props.todo.title)}>X</button>
        <button onClick={() => props.onEdit(props.todo)}>Edit</button>
        </p>
          </div>
        )
      }



export default TodoItems