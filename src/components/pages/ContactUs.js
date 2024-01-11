// ContactUs.js

import React, { useState } from 'react';
import '../../App.css';
import './ContactUs.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='contact-us-container'>
      <h1 className='contact-us-title'>Contact Us</h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />

        <label htmlFor='message'>Message:</label>
        <textarea id='message' name='message' value={formData.message} onChange={handleChange} required />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
