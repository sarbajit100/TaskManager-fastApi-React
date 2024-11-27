import React from "react";
import axios from "axios";

function TodoItems(props){
    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`).then(res => console.log(res.data))};
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