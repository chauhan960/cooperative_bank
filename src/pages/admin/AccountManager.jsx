import React from 'react';
import AccountCard from "../../components/AccountCard"
import { Button } from '@mui/material';

const mockAccount = {
  accountId: 'ACC-10001',
  memberId: 'MSR-0001',
  type: 'savings',
  balance: 12500.5,
  interestRate: 4.0,
  status: 'active',
};

const AccountManager = () => (
  <div>
    <h2>Account Manager</h2>
    <AccountCard account={mockAccount} />
    <Button variant="outlined" sx={{ mt: 2 }}>Update Account</Button>
  </div>
);

export default AccountManager;
