import React, {useState} from 'react';

function App() {
// declare updateable variable representing new task that user wants to add, newTask, using hook function
    const [newTask, setNewTask] = useState("");
// declare updateable variabe representing the new key generated for the new task that the user input, newKey, using hook function
    const [newKey, setNewKey] = useState(0);
// declare updateable array as a list of all the tasks that the user has completed
    const [completedList, setCompletedList] = useState([]);
// declare updateable array as a list of all the tasks that the user wants to complete, listOfTasks, using hook function
    const [newList, setNewList] = useState([]);

    // add value of user input to the array of tasks and clear the input field
    function addTask() {
        setNewKey(newKey + 1)
        const task = {
            id: newKey,
            value: newTask
        }
        setNewList(oldList => [...oldList, task]);
        setNewTask("")
        console.log(newList)
    }

    // declaring a function to shift completed task from pending tasks list to completed tasks list
    const handleCompleted = (taskCompleted) => {
        const updatedList = newList.filter((task) => task.value !== taskCompleted.value);
        setNewList(updatedList);
        setCompletedList(oldList => [...oldList, taskCompleted])
    }

    // declaring a function to delete task of users choosing
    const handleDelete = (taskToDelete) => {
        const updatedList = newList.filter((task) => task.value !== taskToDelete);
        setNewList(updatedList);
      };

    return (
        <div className='App'>
            {/* Create a header file */}
            <h1>To-do List</h1>
            <br></br>
            {/* Create an input field for user to type new newList. Update the newTask variable based on the value in the input field */}
            <input
                type = 'text'
                placeholder = 'Add a task...'
                value = {newTask}
                onChange={e => setNewTask(e.target.value)}
            />
            <button onClick = {() => addTask()}>Add task</button>
            <br></br><br></br>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{display: "flex", flexDirection: "column", justifyContent:'space-between', padding:10}}>
                <h3>Pending Tasks:</h3>
                {/* Display list of tasks with a remove button*/}
                {newList.length === 0 ? "You have no pending tasks." :
                <ul>
                    {newList.map(task => (
                        <li key={task.id}>
                            {task.value}  
                            <button onClick = {() => handleCompleted(task)}>Completed</button>
                            <button onClick = {() => handleDelete(task.value)}>Remove</button>
                        </li>
                    ))}
                </ul>
                }
                </div>
                <div style ={{display: "flex", flexDirection: "column", justifyContent:'space-between', padding:10}}>
                    <h3>Completed Tasks:</h3>
                    {/* Display list of tasks that are completed */}
                    <ul>
                        {completedList.map(task => (
                            <li key={task.id}>
                                {task.value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;