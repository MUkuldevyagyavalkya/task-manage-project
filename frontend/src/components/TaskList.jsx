import React, { useEffect, useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const res = await axios.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      navigate('/login');
    }
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await axios.post('/tasks', { title });
    setTitle('');
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Task Manager</h1>
      <button style={{ float: 'right', marginBottom: '1rem' }} onClick={logout}>Logout</button>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => deleteTask(task._id)}>✖</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
