import React, { useState } from "react";
import "../styles.css";

export default function task({ taskName, time }) {
  return (
    <div className="task">
      <h3>Taskname: {taskName}</h3>
      <h3>Time: {time}</h3>
    </div>
  );
}
