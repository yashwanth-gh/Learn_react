import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const addNewTodo = (e)=>{
        e.preventDefault();
        if(!todo){
            alert("Empty field cannot be submitted");
        return;
    }
        dispatch(addTodo(todo));
        setTodo('');
    }
  return (
    <>
    <form onSubmit={addNewTodo}>
        <input type="text"
        value={todo}
        onChange={(e)=>{setTodo(e.target.value)}}
        placeholder='Add Todo here...' />
        <button type="submit">➕</button>
    </form>
    </>
  )
}

export default AddTodo