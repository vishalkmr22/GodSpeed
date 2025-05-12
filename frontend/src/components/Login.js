import React, { useState } from 'react';
import { loginUser } from '../api';
export default function Login({ onSuccess }) {
  const [form, setForm] = useState({ email:'', password:'' });
  const handle = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = async e => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      onSuccess();
    } catch(err) {
      const msg = err?.response?.data?.error || 'Login failed. Please try again.';
      alert(msg);
    }
  };
  return (
    <div className="auth-container">
      <form onSubmit={submit} className="auth-form">
        <h2>Login</h2>
        <input name="email" placeholder="Email" onChange={handle} required />
        <input name="password" placeholder="Password" type="password" onChange={handle} required />
        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  );
}