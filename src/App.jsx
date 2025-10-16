import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);



  useEffect(() => {
    localStorage.setItem("task",JSON.stringify(tasks))
  })

  const addTask = (task) => {
    setTasks(task);
  }


  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our Friendly Task Manager</p>
      <Taskform addTask = {addTask}/>
      <TaskList/>
      <Progresstracker/>
      <button>Clear all tasks</button>
    </div>
  )
}


