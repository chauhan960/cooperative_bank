import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Reports = () => (
  <Card sx={{ mt: 2 }}>
    <CardContent>
      <Typography variant="h6">Admin Reports</Typography>
      <Typography>Total Loans Approved: ₹5,00,000</Typography>
      <Typography>Total Members Active: 120</Typography>
      <Typography>Recent Transactions Audited: 25</Typography>
    </CardContent>
  </Card>
);

export default Reports;
