import React, { useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/auth/register', form);
      alert('User created!');
      navigate('/login');
    } catch {
      alert('Username taken');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Register</h1>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSubmit}>Register</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Register;
