import { ChangeEvent, useState } from "react";
import { Task } from "./Interfaces";

interface PropsCard {
  task: Task;
  deleteTask: (id: number)=>void
}



function TaskCard({ task, deleteTask }: PropsCard) {

  const [check, setCheck] = useState(false);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) =>{
    setCheck(!check)
  }

  return (
    <div
   
      className={check ? "row card border-secondary mb-3": 'row card border-primary mb-3'}
      style={ check ? {textDecoration: 'line-through', padding: "0", width: "90", cursor: "pointer" }: {padding: "0", width: "90", cursor: "pointer" }}>
      <div
        className="card-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center',
          width: "100%",
        }}>
          <input type='checkbox' onChange={handleCheck} checked={check} />
  
        <button
          className={check ? "btn btn-outline-info" : "btn btn-info"}
          style={{ width: "fit-content"}}
          onClick={()=> task.id && deleteTask(task.id)}
        >
          X
        </button>
      </div>
      <div className="card-body">
        <h4 className="card-title">{task.title}</h4>
        <p className="card-text">{task.description} </p>
      </div>
    </div>
  );
}

export default TaskCard;
