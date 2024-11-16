import React from "react";
import { AddTask } from "../component/AddTask";
import { TaskList } from "../component/TaskList";
import { TaskProvider } from "../TaskContext";

export const HomePage = () => {
  const styles = {
    container: {
      padding: "10px",
      width: "100%",
      maxWidth: "600px",
      paddingTop: "50px",
      margin:"10px"
    }
  };
  return (
    <div style={styles.container}>
      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </div>
  );
};
