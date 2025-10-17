import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import { useEffect, useState } from "react";
import './App.css';
import "./style.css";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    // Load from localStorage on first render
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our Friendly Task Manager</p>

      <Taskform addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        updateTask={updateTask} 
        deleteTask={deleteTask} 
      />
      <Progresstracker />
      <button onClick={clearAllTasks}>Clear All Tasks</button>
    </div>
  );
}
