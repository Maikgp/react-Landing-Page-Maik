import React, { useState } from "react";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todo, setTodo] = useState([]);

	fetch('https://playground.4geeks.com/apis/fake/todos/Maikgp', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Será true si la respuesta es exitosa
        console.log(resp.status); // El código de estado 200, 300, 400, etc.
        console.log(resp.text()); // Intentará devolver el resultado exacto como string
        return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
    })
    .then(data => {
        // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
    })
    .catch(error => {
        // Manejo de errores
        console.log(error);
    });



    return (
        <div className="container">
            <div className="text-center">
                <h1>My todos</h1>
                <div>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <input
                                type="text"
                                onChange={(e) => setInputValue(e.target.value)}
                                value={inputValue}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        setTodo(todo.concat([inputValue]));
                                        setInputValue("");
                                    }
                                }}
                                placeholder="What do you need to do?"
                            />
                        </li>
                        {todo.map((item, index) => (
                            <li className="list-group-item d-flex justify-content-between" key={index}>
                                <span className="todo_list_task">
                                    {item}
                                </span>
                                <span className="todoList_delete">
                                    <i
                                        className="fa fa-trash"
                                        onClick={() =>
                                            setTodo(
                                                todo.filter((t, currentIndex) => index !== currentIndex)
                                            )
                                        }
                                    ></i>
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div id="task" className="white-text">{todo.length} task</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
