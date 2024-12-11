import React from 'react'
import TodoItems from './Todo'
function TodoListView(props) {
  return (
    <div>
      <ul>
        {props.todoList.map((todo) => (
          <TodoItems
            key={todo.title}
            todo={todo}
            onEdit={props.onEdit}
            fetchTodos={props.fetchTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoListView