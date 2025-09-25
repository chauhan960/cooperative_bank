import React, { useState, useEffect } from 'react';
import {
  Box, TextField, Button, Typography, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem
} from '@mui/material';

const Transactions = () => {
  const [formData, setFormData] = useState({
    type: '',
    amount: '',
    accountNumber: '',
    accountHolder: '',
    ifsc: '',
    description: '',
  });

  const [transactions, setTransactions] = useState([]);

  // Load transactions from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('memberTransactions')) || [];
    setTransactions(saved);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new transaction
  const handleSubmit = (e) => {
    e.preventDefault();
    const txnId = `TXN-${Date.now()}`;
    const newTxn = {
      txnId,
      ...formData,
      status: 'pending',
      date: new Date().toLocaleString(),
    };

    const updated = [...transactions, newTxn];
    setTransactions(updated);
    localStorage.setItem('memberTransactions', JSON.stringify(updated));
    setFormData({
      type: '',
      amount: '',
      accountNumber: '',
      accountHolder: '',
      ifsc: '',
      description: '',
    });
    alert('Transaction submitted!');
  };

  // Update transaction status
  const updateStatus = (txnId, newStatus) => {
    const updated = transactions.map((txn) =>
      txn.txnId === txnId ? { ...txn, status: newStatus } : txn
    );
    setTransactions(updated);
    localStorage.setItem('memberTransactions', JSON.stringify(updated));
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>💳 New Transaction</Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          select
          label="Transaction Type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        >
          <MenuItem value="deposit">Deposit</MenuItem>
          <MenuItem value="withdrawal">Withdrawal</MenuItem>
          <MenuItem value="transfer">Transfer</MenuItem>
        </TextField>

        <TextField
          label="Amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Account Number"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Account Holder Name"
          name="accountHolder"
          value={formData.accountHolder}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="IFSC Code"
          name="ifsc"
          value={formData.ifsc}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Submit Transaction
        </Button>
      </form>

      {/* Transaction Table */}
      <Typography variant="h6" sx={{ mt: 4 }}>📄 Transaction History</Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Txn ID</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Account No.</TableCell>
              <TableCell>Holder</TableCell>
              <TableCell>IFSC</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} align="center">No transactions yet.</TableCell>
              </TableRow>
            ) : (
              transactions.map((txn) => (
                <TableRow key={txn.txnId}>
                  <TableCell>{txn.txnId}</TableCell>
                  <TableCell>{txn.type}</TableCell>
                  <TableCell>₹{txn.amount}</TableCell>
                  <TableCell>{txn.accountNumber}</TableCell>
                  <TableCell>{txn.accountHolder}</TableCell>
                  <TableCell>{txn.ifsc}</TableCell>
                  <TableCell>{txn.date}</TableCell>
                  <TableCell>{txn.status}</TableCell>
                  <TableCell>
                    {txn.status === 'pending' && (
                      <>
                        <Button size="small" onClick={() => updateStatus(txn.txnId, 'success')}>✅</Button>
                        <Button size="small" onClick={() => updateStatus(txn.txnId, 'failed')} color="error">❌</Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Transactions;
