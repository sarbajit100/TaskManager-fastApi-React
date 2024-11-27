import React from 'react'
import TodoItems from './Todo'
function TodoListView(props) {
  return (
    <div>
        <ul>
        {props.todoList.map(todo=> <TodoItems todo={todo}/>)}
        </ul>
    </div>
  )
}

export default TodoListView