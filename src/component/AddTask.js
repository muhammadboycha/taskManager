import React, { useContext, useState } from "react";
import { TaskContext } from "../TaskContext";
import { taskStatus, priority } from "../helper/Helper";

export const AddTask = () => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { addTask, tasks } = useContext(TaskContext);
  
  const checkTaskAlreadyExists = (value)=>{
    return tasks.some((item)=> item.taskTitle === value );
  }

  const Handler = () => {
    console.log("tasks", tasks)
    const dataExist = checkTaskAlreadyExists(value);
    if (value) {
        if(dataExist)
        {
          setErrorMessage("Task already exists!")
        } else {
            const taskData = {
            taskTitle: value,
            isDelete: false,
            taskStatus: taskStatus.INPROGRESS,
            priority: priority.LOW,
          };
          addTask(taskData);
          setValue(""); // Clear the input after adding
        }
      
    } else {
      setErrorMessage("Please enter task details.")
    }
  };


  const styles = {
    inputWrapper:{
      display: "flex",
      width:"100%",
      gap:"15px",
      margin:"15px 0px"
    },
    inputStyle:{
      flexGrow:"1",
      padding: "10px 15px",
      borderRadius: "15px",
      border: "1px solid gray",
    },
    buttonStyle:{
      width:"150px",
      padding: "10px 20px",
      borderRadius: "15px",
      backgroundColor: "#448AFF",
      color: "white",
      border: "none",
      fontWeight: "bold",
      cursor: "pointer",
    },
    alertMessage:{
      color: "#E91E63"
    },
    taskManagerTitle:{
      fontWeight: "900",
      fontSize: "30px",
      textAlign: "center"
    }
  }

  return (
    <div>
       <p style={styles.taskManagerTitle}>Task Manager</p>
      <div style={styles.inputWrapper}>
        <input
          style={styles.inputStyle}
          value={value}
          onFocus={()=> setErrorMessage("")}
          onChange={(e) => {
            setValue(e.target.value.trim());
          }}
          placeholder="Add Task"
        ></input>
        <button
          style={styles.buttonStyle}
          onClick={() => {
            Handler();
          }}
        >
          Add
        </button>
      </div>
     {errorMessage &&
        <p style={styles.alertMessage}>{errorMessage}</p>
     } 
    </div>
  );
};
