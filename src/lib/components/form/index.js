import React, { useState } from 'react'
import firebase from '../../firebase'

export function Form() {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value)
    };

    const createTodo = () => {
        const todoRef = firebase.database().ref('List');
        const todo = {
            title,
            complete: false,
        };

        todoRef.push(todo);
    }

    return (
    <div>
        <p>
            <label>username</label>
            <input type='text' name="username" onChange={handleOnChange} value={title}></input>
        </p>
        <button onClick={createTodo}>Add to List</button>
        
    </div>
    );
}