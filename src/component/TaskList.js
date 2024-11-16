import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";
export const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.taskTitle}</li>
        ))}
      </ul>
    </div>
  );
};
