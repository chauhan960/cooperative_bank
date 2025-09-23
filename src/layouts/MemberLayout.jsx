import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import { AppBar,Toolbar,Typography,Button,Box } from '@mui/material';
import { useAuth } from '../pages/auth/AuthContext';

const MemberLayout = () => {
  const { logout } = useAuth();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Member Portal</Typography>
          <Button color="inherit" component={Link} to="/member/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/member/profile">Profile</Button>
          <Button color="inherit" component={Link} to="/member/loan/apply">Loan Form</Button>
          <Button color="inherit" component={Link} to="/member/transactions">Transactions</Button>
          <Button color="inherit" component={Link} to="/member/reports">Reports</Button>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MemberLayout;