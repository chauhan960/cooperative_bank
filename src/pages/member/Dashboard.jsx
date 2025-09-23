import React from 'react';
import MemberCard from '../../components/MemberCard';
import AccountCard from '../../components/AccountCard';
import LoanCard from '../../components/LoanCard';

const mockMember = {
  memberId: 'MSR-0001',
  name: 'Satyan Ray',
  email: 'user@example.com',
  mobile: '919XXXXXXXXX',
  kyc: { verified: false },
};

const mockAccount = {
  accountId: 'ACC-10001',
  type: 'savings',
  balance: 12500.5,
  interestRate: 4.0,
  status: 'active',
};

const mockLoan = {
  loanId: 'LN-20001',
  product: 'personal',
  principal: 500000,
  interestRate: 10.5,
  tenureMonths: 60,
  emi: 10624.5,
  status: 'approved',
};

const Dashboard = () => (
  <div>
    <h2>Member Dashboard</h2>
    <MemberCard member={mockMember} />
    <AccountCard account={mockAccount} />
    <LoanCard loan={mockLoan} />
  </div>
);

export default Dashboard;
