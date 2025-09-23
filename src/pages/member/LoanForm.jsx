import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const LoanForm = () => {
  const [form, setForm] = useState({
    product: '',
    principal: '',
    tenureMonths: '',
    interestRate: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(`Loan Applied:\nProduct: ${form.product}\nPrincipal: ₹${form.principal}`);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" gutterBottom>Apply for Loan</Typography>
      <TextField label="Product Type" name="product" value={form.product} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Principal Amount" name="principal" type="number" value={form.principal} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Tenure (Months)" name="tenureMonths" type="number" value={form.tenureMonths} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Interest Rate (%)" name="interestRate" type="number" value={form.interestRate} onChange={handleChange} fullWidth margin="normal" />
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>Submit Loan Request</Button>
    </Box>
  );
};

export default LoanForm;
