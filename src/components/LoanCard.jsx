import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const LoanCard = ({ loan }) => {
  if (!loan) return null;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Loan ID: {loan.loanId}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography>Product: {loan.product}</Typography>
          <Typography>Principal: ₹{loan.principal?.toLocaleString()}</Typography>
          <Typography>Interest Rate: {loan.interestRate}%</Typography>
          <Typography>Tenure: {loan.tenureMonths} months</Typography>
          <Typography>EMI: ₹{loan.emi?.toLocaleString()}</Typography>
          <Typography>Status: {loan.status}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LoanCard;
