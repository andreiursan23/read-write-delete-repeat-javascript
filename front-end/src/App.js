import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Task from './components/Task';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const setNewTaskFunct = (e) => {
    setNewTask(e);
  }

  const loadTasks = () => {
    axios
      .get('http://localhost:6789/tasks/')
      .then((response) => {
        setTasks(response.data);
      })
      .catch(() => {
        alert('Server is down');
      })
  }

  useEffect(() => {
    loadTasks();
  }, [])

  const createTask = (newTask) => {
    if (newTask === '') {
      alert('Please input a new task');
    } else {
      axios
        .post('http://localhost:6789/tasks/', { title: newTask })
        .then(() => {
          loadTasks();
          setNewTaskFunct('');
      });
    }
  };

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:6789/tasks/${id}`)
      .then(() => {
        loadTasks();
      })
  };

  return (
    <>
        <h1>To Do List</h1>

        <AddTask createTask={createTask} setNewTaskFunct={setNewTaskFunct} newTask={newTask} />

        <div id="list">
          {tasks.map((task) => (
            <Task key={task.id} title={task.title} isCompleted={task.isCompleted} deleteTask={deleteTask} id={task.id} />
          ))}
        </div>
    </>
  );
}

export default App;
