import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import AddTodo from './AddTodo';

function Todo() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState('');
  const [id,setId] = useState('');

  function editTodo(presentId,presentText) {
    // e.preventDefault();
    setText(presentText);
    setId(presentId);
    setEdit(true);
  }
  return (
    <>
      <div>Todo with REDUX</div>
      <AddTodo isEditable={edit} editText={text} changeEditable={setEdit} changeEditText={setText} id={id} changeId ={setId}/>
      {
        todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            {<button onClick={() => editTodo(todo.id,todo.text)}>
              ✍️
            </button>}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              ❌
            </button>
          </li>
        ))
      }
    </>
  )
}

export default Todo