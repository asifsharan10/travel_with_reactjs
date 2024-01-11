// SignUp.js

import React, { useState } from 'react';
import '../../App.css';
import './SignUp.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Sign-up form submitted:', formData);
    // You can send a request to your server for sign-up functionality
  };

  return (
    <div className='sign-up-container'>
      <h1 className='sign-up-title'>Sign Up</h1>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' name='username' value={formData.username} onChange={handleChange} required />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' value={formData.password} onChange={handleChange} required />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}
