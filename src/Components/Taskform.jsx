import { useState } from "react"
export default function Taskform() {
    const [task,setTask] =useState('');
    const [priority, setPriority] = useState('medium');
    const [category, setCategory] = useState('general');
     
    const handlesubmit = (e) => {
        e.preventDefault();
        addTask({text: task, priority,category,complete: false})

        // reset

        setTask('');
        setPriority('medium');
        setCategory('general');
    }
    return (
        
        <form onSubmit={handlesubmit}>
        <div>
            <h1>Taskfor Component</h1>
            <input type="text" placeholder="Enter the task" onChange={(e) =>setTask(e.target.value)}/>
            <button type = "submit"> Add Task</button>
            <h1>{task} {priority} {category}</h1>
        </div>
        <div>
            <select onChange={(e) => setPriority(e.target.value)}>
                <option value = "high">High</option>
                <option value = "medium">Medium</option>
                <option value = "low">low</option>
            </select>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value = "general">General</option>
                <option value = "work">Work</option>
                <option value = "personal">Personal</option>
            </select>
        </div>
        </form>
    )
}