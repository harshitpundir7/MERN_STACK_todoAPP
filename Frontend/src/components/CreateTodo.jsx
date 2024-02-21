import { useState } from "react";

export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function addTodo() {

        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
            
            window.location.reload();
    };


return (
<div className="flex flex-col items-center m-11 mb-24">
    <div
        className="p-2 m-2 border border-gray-300 rounded hover:bg-blue-500 hover:text-blue-800"
        style={{ backgroundColor: "lightblue" }}
    >
        <input
            id="title"
            className="p-2 m-2 border border-gray-300 rounded"
            type="text"
            placeholder="Title"
            onChange={(e) => {
                const value = e.target.value;
                setTitle(value);
            }}
        />
        <input
            id="desc"
            className="p-2 m-2 border border-gray-300 rounded"
            type="text"
            placeholder="Description"
            onChange={(e) => {
                const value = e.target.value;
                setDescription(value);
            }}
        />
        <button
            className="p-2 m-2 bg-blue-500 text-white rounded"
            onClick={addTodo}
        >
            Add a todo
        </button>
    </div>
</div>)}
