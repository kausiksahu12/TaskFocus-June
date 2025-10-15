export default function Taskform() {
    return (
        <form>
        <div>
            <h1>Taskfor Component</h1>
            <input type="text" placeholder="Enter the task" value/>
            <button type = "submit"> Add Task</button>
        </div>

        <div>
            <select>
                <option value = "high">High</option>
                <option value = "medium">Medium</option>
                <option value = "low">low</option>
            </select>
            <select>
                <option value = "general">General</option>
                <option value = "work">Work</option>
                <option value = "personal">Personal</option>
            </select>
        </div>
        </form>
    )
}