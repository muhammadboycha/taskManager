import React, { useContext, useState } from "react";
import { TaskContext } from "../TaskContext";
import { taskStatus, priority } from "../helper/Helper";

export const AddTask = () => {
  const [value, setValue] = useState("");
  const { addTask } = useContext(TaskContext);
  const Handler = () => {
    if (value) {
      const taskData = {
        taskTitle: value,
        isDelete: false,
        taskStatus: taskStatus.INPROGRESS,
        priority: priority.LOW,
      };
      addTask(taskData);
      setValue(""); // Clear the input after adding
    }
  };
  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value.trim());
        }}
        placeholder="Add Task"
      ></input>
      <button
        onClick={() => {
          Handler();
        }}
      >
        Add
      </button>
    </div>
  );
};
