// En tu archivo home.jsx
import React, { useEffect, useState } from "react";

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const getList = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/Maikgp");
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            const data = await response.json();
            setTodos(data);
            return data;
        } catch (error) {
            console.error('Error al obtener los datos:', error.message);
            throw error;
        }
    };

    const updateList = async () => {
        if (todos.length > 0) {
            try {
                const requestOptions = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(todos),
                };
                const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/Maikgp", requestOptions);
                if (!response.ok) {
                    throw new Error('La solicitud no fue exitosa');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error al actualizar los datos:', error.message);
                throw error;
            }
        }
    };

    useEffect(() => {
        getList(); 
    }, []);

    useEffect(() => {
        updateList(); 
    }, [todos]);

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            setTodos([...todos, inputValue]); 
            setInputValue(""); 
        }
    };

    const handleDeleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index)); 
    };

    return (
        <div className="container">
            <div className="text-center">
                <h1>My To Do</h1>
                <div>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <input
                                type="text"
                                onChange={(e) => setInputValue(e.target.value)}
                                value={inputValue}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        handleAddTodo(); // Llama a handleAddTodo() cuando se presiona la tecla Enter en el input
                                    }
                                }}
                                placeholder="What do you need to do?"
                            />
                        </li>
                        {todos.map((item, index) => (
                            <li className="list-group-item d-flex justify-content-between" key={index}>
                                <span className="todo_list_task">
                                    {item}
                                </span>
                                <span className="todoList_delete">
                                    <i
                                        className="fa fa-trash"
                                        onClick={() => handleDeleteTodo(index)} // Llama a handleDeleteTodo() cuando se hace clic en el icono de eliminación
                                    ></i>
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div id="task" className="white-text">{todos.length} task</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
