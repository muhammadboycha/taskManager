import React, { useContext, useState } from "react";
import { TaskContext } from "../TaskContext";

import { priority, taskStatus } from "../helper/Helper";
import { CustomSelectInput } from "./CustomSelect";
import { findByLabelText } from "@testing-library/react";
export const TaskList = () => {
  const { tasks,updateTask } = useContext(TaskContext);
  const [showPrioritySelect,setShowPrioritySelect] = useState("");
  const [showTaskStatusSelect,setShowTaskStatusSelect] = useState("");
  const [isDelete, setIsDelete] = useState("");
  
  const deleteHandler = (index)=>{
    
    const updatedTaskData = tasks.filter((item, i)=> i !== index);
    console.log("updatedTaskData",updatedTaskData);
    updateTask(updatedTaskData);
    setIsDelete("");
   
  }

  const styles = {
    listContainer:{
      padding: "15px",
      borderRadius: "15px",
      backgroundColor: "#ebebeb",
      overflowX: "auto",
    },
    table:{
      width: "100%",
      border: "1px solid lightGray",
      borderCollapse: "collapse"
    },
    
    td: {
      padding: "0px 5px"
    },
    th: {
      padding: "15px 5px",
      textAlign: "left",
      minWidth: "55px"
    },
    tr:{
      borderBottom: "1px solid lightGray",
      backgroundColor: "white"
    },
    customOptionWrapper:{
      position: "relative",
    },
    optionListWrapper:{
      backgroundColor: "red",
      zIndex: 1,
      position: "absolute",
      width: "100%",
      borderRadius: "15px",
      top: "30px"
    },
    tableDeleteButton:{
      padding: "5px 15px",
      backgroundColor: "#e91e63",
      color: "white",
      borderRadius: "15px",
      border: "none",
      display: "flex",
      justifyContent: "center",
      cursor: "pointer",
      width: "max-content"
    },
    deleteButton:{
      padding: "10px 15px",
      backgroundColor: "#e91e63",
      color: "white",
      borderRadius: "15px",
      border: "none",
      display: "flex",
      justifyContent: "center",
      cursor: "pointer",
      minWidth: "100px"  
    },
    cancelButton:{
      padding: "10px 15px",
      backgroundColor: "lightgray",
      color: "white",
      borderRadius: "15px",
      border: "none",
      display: "flex",
      justifyContent: "center",
      cursor: "pointer",
      minWidth: "100px" 
    },
    buttonWrapper:{
      display: "flex",
      flexDirection: "row",
      gap: "15px",
      justifyContent: "center",
    },
    deleteTitle:{
      fontSize: "22px",
      marginBottom: "40px"
    },
    titleText:{
      padding: "6px",
      margin: "0px",
    }
  };
  return (
    <div style={styles.listContainer}>
        <h2>Task List</h2>
        <table style={styles.table}>
          <thead>
          <tr style={styles.tr}>
            <th style={styles.th}>
                Sl. No.
            </th>
            <th style={styles.th}>
                Task
            </th>
            <th style={styles.th}>
                Priority
            </th>
            <th style={styles.th}>
                Status
            </th>
            <th style={styles.th}>
                Action
            </th>
          </tr>
          </thead>
          <tbody>
          {tasks.map((task, index) => (
            <tr className="tableBodyTr" key={index}>
              <td style={styles.td}>
                {index + 1}
              </td>
              <td style={styles.td}>
                <p style={styles.titleText}>
                  {task.taskTitle}
                </p>
              </td>
              <td style={styles.td}>
                  <div style={styles.customOptionWrapper}>
                    <div>
                      <p style={{
                      backgroundColor: task.priority === priority.LOW 
                        ? "#388E3C" 
                        : task.priority === priority.MEDIUM 
                          ? "#FFA000" 
                          : "#E91E63",
                      color: "white",
                      borderRadius:"15px",
                      display: "flex",
                      justifyContent: "center",
                      padding: "5px 15px",
                      cursor: "pointer",
                      width: "max-content",  
                      margin: "8px 0px"  
                      }} onClick={()=>{
                        setShowPrioritySelect(showPrioritySelect === index ? "": index)
                        setShowTaskStatusSelect("");
                      } }>
                        {task.priority} 
                      </p>
                    </div>
                    <div style={styles.optionListWrapper}>
                      {showPrioritySelect === index ? 
                      <CustomSelectInput hideDropdown={setShowPrioritySelect} index={index} options={priority} propertyType="priority" /> 
                      : null
                      }
                      
                    </div>
                  </div>
              </td>
              <td style={styles.td}>
                <div style={styles.customOptionWrapper}>
                    <div>
                      <p 
                      style={{
                        backgroundColor: task.taskStatus === taskStatus.INPROGRESS 
                        ? "#FFA000" 
                        : "#388E3C",
                      color: "white",
                      borderRadius:"15px",
                      display: "flex",
                      justifyContent: "center",
                      padding: "5px 15px",
                      cursor: "pointer",   
                      width: "max-content",  
                      margin: "8px 0px"                 
                      }} onClick={()=>{
                        setShowTaskStatusSelect(showTaskStatusSelect === index ? "":index);
                        setShowPrioritySelect("")
                      }
                      }>
                         {task.taskStatus} 
                      </p>
                    </div>
                    <div style={styles.optionListWrapper}>
                        {showTaskStatusSelect === index ? 
                         <CustomSelectInput hideDropdown={setShowTaskStatusSelect} index={index} options={taskStatus} propertyType="taskStatus" />
                        : null
                        }
                    </div>
                  </div>
               
              </td>
              <td style={styles.td}>
                <div style={styles.tableDeleteButton} onClick={()=>{
                    setShowTaskStatusSelect("");
                    setShowPrioritySelect("")
                    setIsDelete({itemIndex:index,taskTitle:task.taskTitle})
                }}>
                    Delete
                </div>
              </td>

            </tr>
          ))}
          </tbody>
        </table>
        {isDelete === "" ? null:<div className="mainPopUp">
            <div className="popupWrapper">
              <p style={styles.deleteTitle}>
                Are you sure you want to delete <span style={{fontWeight:"bold"}}>{isDelete.taskTitle}</span>!
              </p>
              <div style={styles.buttonWrapper}>
                <button style={styles.cancelButton} onClick={()=>setIsDelete("")}>
                  No
                </button>
                <button style={styles.deleteButton} onClick={()=>deleteHandler(isDelete.itemIndex)}>
                  Yes
                </button>
              </div>
            </div>
          </div>
        }
      </div>
  );
};
