// frontend/src/components/Signup.js
import React, { useState } from 'react';
import { signupUser } from '../api';

export default function Signup({ onSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await signupUser(form);
      alert(res.data.message || 'Signup successful!');
      onSuccess?.();
    } catch (err) {
      console.error('Signup error:', err.response || err);
      const msg = err?.response?.data?.error || 'Signup failed. Please try again.';
      alert(msg);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Sign Up</h2>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </form>
    </div>
  );
}
