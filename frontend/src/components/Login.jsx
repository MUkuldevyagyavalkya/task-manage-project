import React, { useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch {
      alert('Invalid login');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSubmit}>Login</button>
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
}

export default Login;
