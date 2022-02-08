import { useState } from "react";
import "./styles/App.css";

//interfaces
import { Props, Task } from "./components/Interfaces";
import TaskList from "./components/TaskList";
import Nav from "./components/Nav";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTask] = useState<Task[]>([]);
  const [localStorage, setLocalStorage] = useState<Task[]>([
    ...tasks
  ])

  

  window.localStorage.setItem("tareas", JSON.stringify(localStorage))

  

  const addNewStorage =(task: Task)=>{
    // setLocalStorage([
    //   ...localStorage,
    //   task
    // ])
    // window.localStorage.setItem("tareas", JSON.stringify(localStorage));
    console.log(task)
  }

  const addNewTask = (task: Task) => {
    setTask([
      ...tasks,
      { ...task, id: Math.floor(Math.random() * 1000), completed: false },
    ]);
    setLocalStorage([
      ...localStorage,
      task
    ])
    window.localStorage.setItem("tareas", JSON.stringify(localStorage))
  };

  const deleteTask = (id: number) =>
    setTask(tasks.filter((task) => task.id !== id));

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main className="container">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} addNewStorage={addNewStorage} />
          </div>
          <div className="col-md-8">
            <div className="row" style={{ padding: "0 1rem" }}>
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
