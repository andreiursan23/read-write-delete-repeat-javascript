import React, { useState } from "react";

const AddTask = ({ createTask, setNewTaskFunct, newTask }) => {
    return (
        <div id="menu">
            <label>Your new to-do</label>
            <input value={newTask} onChange={e => setNewTaskFunct(e.target.value)} type="text" placeholder="enter new task"/>
            <button onClick={() => {createTask(newTask)}}>Add task</button>
        </div>
    );
}

export default AddTask;