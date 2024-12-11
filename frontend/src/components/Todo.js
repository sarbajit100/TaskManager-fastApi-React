import React from "react";
import axios from "axios";
const apiUrl = "http://52.91.203.123/api"

function TodoItems(props){
    const deleteTodoHandler = (title) => {
        axios.delete(`${apiUrl}/todo/${title}`).then(res => console.log(res.data))};
        return (
          <div>
              <p>
                <span>{props.todo.title} :</span>{props.todo.desc}
                <button onClick={() =>deleteTodoHandler(props.todo.title)}>X</button>
              </p>
          </div>
        )
      }



export default TodoItems