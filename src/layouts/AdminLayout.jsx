import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAuth } from '../pages/auth/AuthContext';

const AdminLayout = () => {
  const { logout } = useAuth();

  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Admin Panel</Typography>
          <Button color="inherit" component={Link} to="/admin/loans">Loan Approval</Button>
          <Button color="inherit" component={Link} to="/admin/kyc">KYC Review</Button>
          <Button color="inherit" component={Link} to="/admin/accounts">Account Manager</Button>
          <Button color="inherit" component={Link} to="/admin/audit">Audit Logs</Button>
          <Button color="inherit" component={Link} to="/admin/reports">Reports</Button>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;