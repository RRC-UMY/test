import React, { useState } from 'react'
import firebase from '../../firebase'

export function Form() {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value)
    };

    const handleClear = () => {
        setTitle("");
    }

    const createTodo = () => {
        if (title === "") {
            alert("You Must Enter the Username !!!!!");
        } else {
            const todoRef = firebase.database().ref('List');
            const todo = {
                title,
                complete: false,
            };

            todoRef.push(todo);
            handleClear();
        }


    }

    return (
        <div>
            <p>
                <label>Username</label>
                <input class="form-control" type='text' name="username" onChange={handleOnChange} value={title} placeholder="Enter username"></input>
            </p>
            <button class="btn btn-primary" onClick={createTodo}>Add to List</button>

        </div>
    );
}