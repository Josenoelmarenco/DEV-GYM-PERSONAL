import React, { useState } from "react";

function ToDoList() {
  // 1. Estados
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // 2. Controlar el input
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  // 3. Añadir tarea
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]); 
      setNewTask(""); 
    }
  }

  // 4. Borrar tarea (crea una nueva lista excluyendo la que borramos)
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); 
  }

  // 5. Lo que ve el usuario (La vista)
  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;