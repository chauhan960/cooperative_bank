import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AccountCard = ({ account }) => {
  if (!account) return null;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Account ID: {account.accountId}</Typography>
        <Typography>Type: {account.type}</Typography>
        <Typography>Balance: ₹{account.balance?.toLocaleString()}</Typography>
        <Typography>Interest Rate: {account.interestRate}%</Typography>
        <Typography>Status: {account.status}</Typography>
      </CardContent>
    </Card>
  );
};

export default AccountCard;
