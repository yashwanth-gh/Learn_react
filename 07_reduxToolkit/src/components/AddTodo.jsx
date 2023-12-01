import React,{useEffect, useState} from 'react'
import {useDispatch} from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

function AddTodo({isEditable,editText,changeEditable,changeEditText,id,changeId}) {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    useEffect(()=>{
        if(isEditable){
            changeEditText('');
            setTodo(editText);
        }
    },[isEditable])

    const addNewTodo = (e)=>{
        e.preventDefault();
        if(isEditable){
            const text = todo;
            dispatch(updateTodo({id,text}));
            changeId('');
            changeEditable(false)
        setTodo('');

            return;
        }
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