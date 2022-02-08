import { Task } from "./Interfaces";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id: number)=>void
}

function TaskList({ tasks, deleteTask}: Props) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard task={task} deleteTask={deleteTask} key={task.id}/>
      ))}
    </>
  );
}

export default TaskList;
