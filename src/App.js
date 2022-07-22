import React, { useState } from "react";
import Task from "./components/Task";
import "./styles.css";

export default function App() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, { task: taskName, time: time }]);
    setTaskName("");
    setTime("");
  };

  return (
    <div className="App">
      <h3>todo list</h3>
      <div>
        <label>Task Name:</label>
        <br />
        <input
          type="text"
          id="task"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <br />
        <label>Time:</label>
        <br />
        <input
          type="text"
          id="time"
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />

        <button onClick={addTask}>Add</button>

        {taskList.map((task) => {
          return <Task taskName={task.task} time={task.time} />;
        })}
      </div>
    </div>
  );
}
