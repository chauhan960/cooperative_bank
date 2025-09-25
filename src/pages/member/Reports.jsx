import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';

const Reports = () => {
  const [profile, setProfile] = useState({});
  const [loans, setLoans] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('memberProfile')) || {};
    const savedLoans = JSON.parse(localStorage.getItem('submittedLoans')) || [];
    const savedTxns = JSON.parse(localStorage.getItem('memberTransactions')) || [];

    setProfile(savedProfile);
    setLoans(savedLoans);
    setTransactions(savedTxns);
  }, []);

  const totalLoanAmount = loans.reduce((sum, loan) => sum + Number(loan.amount || 0), 0);
  const totalTransactions = transactions.length;
  const totalTxnAmount = transactions.reduce((sum, txn) => sum + Number(txn.amount || 0), 0);
  const lastTxn = transactions[transactions.length - 1];

  const approvedCount = loans.filter(l => l.status === 'approved').length;
  const rejectedCount = loans.filter(l => l.status === 'rejected').length;
  const pendingCount = loans.filter(l => l.status === 'pending').length;

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>📊 Member Report Summary</Typography>
        <Divider sx={{ mb: 2 }} />

        {/* Profile Summary */}
        <Typography variant="h6">👤 Profile</Typography>
        <Typography><strong>Name:</strong> {profile.name || '—'}</Typography>
        <Typography><strong>Email:</strong> {profile.email || '—'}</Typography>
        <Typography><strong>Phone:</strong> {profile.phone || '—'}</Typography>
        <Typography><strong>Address:</strong> {profile.address || '—'}</Typography>

        <Divider sx={{ my: 2 }} />

        {/* Loan Summary */}
        <Typography variant="h6">💼 Loan Summary</Typography>
        <Typography>Total Loans Applied: {loans.length}</Typography>
        <Typography>Approved: {approvedCount}</Typography>
        <Typography>Rejected: {rejectedCount}</Typography>
        <Typography>Pending: {pendingCount}</Typography>
        <Typography>Total Loan Amount: ₹{totalLoanAmount.toLocaleString()}</Typography>

        <Divider sx={{ my: 2 }} />

        {/* Transaction Summary */}
        <Typography variant="h6">💳 Transaction Summary</Typography>
        <Typography>Total Transactions: {totalTransactions}</Typography>
        <Typography>Total Amount Transacted: ₹{totalTxnAmount.toLocaleString()}</Typography>
        {lastTxn && (
          <>
            <Typography>Last Transaction:</Typography>
            <Typography>→ ₹{lastTxn.amount} to {lastTxn.accountHolder} ({lastTxn.accountNumber})</Typography>
            <Typography>Status: {lastTxn.status}</Typography>
            <Typography>Date: {lastTxn.date}</Typography>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default Reports;
