import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo,updateTodo } from '../features/todo/todoSlice';
import AddTodo from './AddTodo';

function Todo() {
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();
  return (
    <>
    <div>Todo with REDUX</div>
    <AddTodo/>
    {
        todos.map(todo=>(
            <li key={todo.id}>
                {todo.text}
{/*                 <button onClick={()=>}>
                ✍️
                </button> */}
                <button onClick={()=>dispatch(removeTodo(todo.id))}>
                ❌
                </button>
            </li>
        ))
    }
    </>
  )
}

export default Todo