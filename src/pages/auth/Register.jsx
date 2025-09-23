import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import {
  Box, Button, TextField, Typography,
  RadioGroup, FormControlLabel, Radio, Paper
} from '@mui/material';

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '', email: '', password: '', role: 'member'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.role);
    navigate(formData.role === 'admin' ? '/admin/loans' : '/member/dashboard');
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, mx: 'auto', mt: 6, p: 4 }}>
      <Typography variant="h5" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" name="name" fullWidth margin="normal" value={formData.name} onChange={handleChange} required />
        <TextField label="Email" name="email" type="email" fullWidth margin="normal" value={formData.email} onChange={handleChange} required />
        <TextField label="Password" name="password" type="password" fullWidth margin="normal" value={formData.password} onChange={handleChange} required />
        <Typography variant="subtitle1" sx={{ mt: 2 }}>Select Role</Typography>
        <RadioGroup row name="role" value={formData.role} onChange={handleChange}>
          <FormControlLabel value="member" control={<Radio />} label="Member" />
          <FormControlLabel value="admin" control={<Radio />} label="Admin" />
        </RadioGroup>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>Register</Button>
      </form>
    </Paper>
  );
};

export default Register;