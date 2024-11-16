import React from "react";
import { AddTask } from "../component/AddTask";
import { TaskList } from "../component/TaskList";
import { TaskProvider } from "../TaskContext";

export const HomePage = () => {
  return (
    <div>
      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </div>
  );
};
