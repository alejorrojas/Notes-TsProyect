import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { Task } from "./Interfaces";

type EventInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  addNewTask: (task: Task) => void;
  addNewStorage: (task: Task) => void;
}

const initialState = {
  title: "",
  description: "",
};

export default function TaskForm({ addNewTask, addNewStorage }: Props) {
  const [task, setTask] = useState<Task>(initialState);
  const inputTitle = useRef<HTMLInputElement>(null);

  const handleOnChange = ({ target: { name, value } }: EventInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewStorage(task)
    addNewTask(task);
    setTask(initialState);
    inputTitle.current?.focus();
  };

  return (
    <div className="card border-primary mb-3" style={{ width: "90%" }}>
      <div className="card-body">
        <h4 className="card-title">Add task</h4>
        <div className="card-text">
          <form onSubmit={handleSubmit}>
            <label className="form-label">Title</label>
            <input
              type="text"
              placeholder="Write a title"
              name="title"
              value={task.title}
              className="form-control"
              onChange={handleOnChange}
              autoFocus
              ref={inputTitle}
            />
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={task.description}
              className="form-control"
              onChange={handleOnChange}
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "100%",
                height: "fit-content",
                margin: "10px 0",
                padding: "0",
              }}
            >
              +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
