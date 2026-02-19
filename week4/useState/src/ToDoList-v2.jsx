import { useState } from "react";

const ToDoListNew = () => {
    //1. Estado
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('')

    //2. controlar el input
    const handleInputChange = (e) => {setNewTask(e.target.value)};
    //3. add tarea
    const addNewTask = () => {
        if (newTask.trim() !== "") {
            setTasks((t) => [...t, newTask]);
            setNewTask('');
        }
    }
    //4. delete task
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    //5. return view
    return (
        <div className="to-do-list">
            <h1>New To-Do List</h1>

            <div>
                <input 
                type="text"
                placeholder="Ingresa tu nueva tarea..."
                value={newTask}
                onChange={handleInputChange}
                />
                <button className="add-button" onClick={addNewTask} > Add new task </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text"> {task} </span>
                        <button className="delete-button" onClick={() => deleteTask(index)}> Delete </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoListNew;