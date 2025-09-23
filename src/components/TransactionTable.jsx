import React from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Paper
} from '@mui/material';

const TransactionTable = ({ transactions }) => {
  if (!transactions || transactions.length === 0) return null;

  return (
    <Paper sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Txn ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Mode</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Balance After</TableCell>
            <TableCell>Narration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((txn) => (
            <TableRow key={txn.txnId}>
              <TableCell>{txn.txnId}</TableCell>
              <TableCell>{txn.type}</TableCell>
              <TableCell>{txn.mode}</TableCell>
              <TableCell>₹{txn.amount}</TableCell>
              <TableCell>₹{txn.balanceAfter}</TableCell>
              <TableCell>{txn.narration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TransactionTable;
