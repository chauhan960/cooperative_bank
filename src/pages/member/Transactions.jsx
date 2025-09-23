import React from 'react';
import TransactionTable from '../../components/TransactionTable';

const mockTransactions = [
  {
    txnId: 'TXN-900001',
    accountId: 'ACC-10001',
    memberId: 'MSR-0001',
    type: 'credit',
    mode: 'cash',
    amount: 5000,
    balanceAfter: 17500.5,
    narration: 'Deposit',
  },
  {
    txnId: 'TXN-900002',
    type: 'debit',
    mode: 'upi',
    amount: 2000,
    balanceAfter: 15500.5,
    narration: 'Withdrawal',
  },
];

const Transactions = () => (
  <div>
    <h2>Transaction History</h2>
    <TransactionTable transactions={mockTransactions} />
  </div>
);

export default Transactions;
