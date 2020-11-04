import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
import Todo from '../todo';

export default function List(){

    const [todoList, setTodoList] = useState();

    useEffect(()=> {
        const todoRef = firebase.database().ref('List');
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];

            for (let id in todos) {
                todoList.push({id, ...todos[id]});                
            }
            setTodoList(todoList);
        });
    }, []);

    return(
        <div>
            {todoList? todoList.map((todo, index) => <Todo todo={todo} key={index}/>) : ''}
        </div>
    );
}