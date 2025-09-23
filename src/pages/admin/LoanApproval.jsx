import React from 'react';
import LoanCard from '../../components/LoanCard';
import { Button } from '@mui/material';

const mockLoan = {
  loanId: 'LN-20001',
  product: 'personal',
  principal: 500000,
  interestRate: 10.5,
  tenureMonths: 60,
  emi: 10624.5,
  status: 'applied',
};

const LoanApproval = () => (
  <div>
    <h2>Loan Approval Panel</h2>
    <LoanCard loan={mockLoan} />
    <Button variant="contained" color="success" sx={{ mt: 2 }}>Approve</Button>
    <Button variant="outlined" color="error" sx={{ mt: 2, ml: 2 }}>Reject</Button>
  </div>
);

export default LoanApproval;
