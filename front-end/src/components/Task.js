import React from "react";

const Task = ({ title, isCompleted, deleteTask, id }) => {    
    return (
        <>
            <div>
                <li style={{ display: 'inline', textDecoration: isCompleted ? 'line-through' : 'none' }}>
                    {title}
                </li>
                <br></br>

                {!isCompleted && 
                    <button onClick={() => deleteTask(id)}>Delete</button> 
                }
            </div>
        </>
    );
}

export default Task;