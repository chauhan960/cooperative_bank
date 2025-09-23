import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Box, Button, Typography } from '@mui/material';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate(role === 'admin' ? '/admin/loans' : '/member/dashboard');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5">Login as:</Typography>
      <Button variant="contained" onClick={() => handleLogin('member')} sx={{ m: 1 }}>
        Member
      </Button>
      <Button variant="contained" color="secondary" onClick={() => handleLogin('admin')} sx={{ m: 1 }}>
        Admin
      </Button>
    </Box>
  );
};

export default Login;