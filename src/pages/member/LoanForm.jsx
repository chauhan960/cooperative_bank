import React, { useState, useEffect } from 'react';
import {
  Box, TextField, Button, Typography, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    product: '',
    amount: '',
    tenure: '',
    interest: '',
  });

  const [loans, setLoans] = useState([]);

  // Load submitted loans from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('submittedLoans')) || [];
    setLoans(saved);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loanId = `LN-${Date.now()}`;
    const newLoan = { ...formData, loanId, status: 'pending' };

    const updatedLoans = [...loans, newLoan];
    setLoans(updatedLoans);
    localStorage.setItem('submittedLoans', JSON.stringify(updatedLoans));

    setFormData({ product: '', amount: '', tenure: '', interest: '' });
    alert('Loan application submitted!');
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>📋 Apply for Loan</Typography>

      {/* Form in table layout */}
      <form onSubmit={handleSubmit}>
        <TableContainer component={Paper} sx={{ mb: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Type</TableCell>
                <TableCell>Principal Amount</TableCell>
                <TableCell>Tenure (Months)</TableCell>
                <TableCell>Interest Rate (%)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="e.g. Home"
                    fullWidth
                    required
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    type="number"
                    placeholder="e.g. 500000"
                    fullWidth
                    required
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleChange}
                    type="number"
                    placeholder="e.g. 60"
                    fullWidth
                    required
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    type="number"
                    placeholder="e.g. 8.5"
                    fullWidth
                    required
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Button variant="contained" color="primary" type="submit">
          Submit Loan Request
        </Button>
      </form>
    </Box>
  );
};

export default LoanForm;
