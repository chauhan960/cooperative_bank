import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Reports = () => (
  <Card sx={{ mt: 2 }}>
    <CardContent>
      <Typography variant="h6">Reports</Typography>
      <Typography>Loan Summary: ₹5,00,000 approved</Typography>
      <Typography>Account Balance: ₹12,500.50</Typography>
      <Typography>Last Transaction: ₹5,000 credited</Typography>
    </CardContent>
  </Card>
);

export default Reports;
