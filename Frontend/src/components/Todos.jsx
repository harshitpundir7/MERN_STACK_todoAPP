import React, { useEffect, useState } from 'react';

export function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:3000/todos');
                const json = await res.json();
                setTodos(json.todos);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {todos.map((todo, index) => (
                    <div key={index} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                        <h1 className="text-xl font-bold m-3">{todo.title}</h1>
                        <h2 className="text-gray-500 m-3">{todo.description}</h2>
                        
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
      