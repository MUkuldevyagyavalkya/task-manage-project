import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TaskList from './components/TaskList';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
