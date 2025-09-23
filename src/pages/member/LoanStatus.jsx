import React from 'react';
import LoanCard from '../../components/LoanCard';

const mockLoan = {
  loanId: 'LN-20001',
  product: 'personal',
  principal: 500000,
  interestRate: 10.5,
  tenureMonths: 60,
  emi: 10624.5,
  status: 'approved',
};

const LoanStatus = () => (
  <div>
    <h2>Loan Status</h2>
    <LoanCard loan={mockLoan} />
  </div>
);

export default LoanStatus;
