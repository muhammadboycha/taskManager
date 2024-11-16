import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";
export const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const styles = {
    container: {
      height: "100hv",
      width: "100%",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    listContainer: {
      padding: "10px",
      width: "30%",
      borderRadius: "15px",
      backgroundColor: "gray",
    },
    listItem: {
      backgroundColor: "lightgray",
      padding: "10px",
      borderRadius: "15px",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.listContainer}>
        <h2>Task List</h2>
        {tasks.map((task, index) => (
          <p style={styles.listItem} key={index}>
            {task.taskTitle}
          </p>
        ))}
      </div>
    </div>
  );
};
