import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [member, setMember] = useState({});
  const [account, setAccount] = useState({});
  const [loan, setLoan] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setMember(JSON.parse(localStorage.getItem('memberProfile')) || {});
    setAccount(JSON.parse(localStorage.getItem('memberAccount')) || {});
    setLoan(JSON.parse(localStorage.getItem('memberLoan')) || {});
    setTransactions(JSON.parse(localStorage.getItem('memberTransactions')) || []);
  }, []);

  const totalTxnAmount = transactions.reduce((sum, t) => sum + Number(t.amount || 0), 0);
  const lastTxn = transactions[transactions.length - 1];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>📋 Member Dashboard</h2>

      {/* Member Info */}
      <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
        <h3>👤 Member Information</h3>
        <p><strong>Name:</strong> {member.name || '—'}</p>
        <p><strong>ID:</strong> {member.memberId || '—'}</p>
        <p><strong>Email:</strong> {member.email || '—'}</p>
        <p><strong>Mobile:</strong> {member.phone || '—'}</p>
        <p><strong>Status:</strong> {member.status || 'Unverified'}</p>
      </div>

      {/* Account Info */}
      <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
        <h3>🏦 Account Information</h3>
        <p><strong>Account ID:</strong> {account.accountId || '—'}</p>
        <p><strong>Type:</strong> {account.type || '—'}</p>
        <p><strong>Balance:</strong> ₹{account.balance || '0.00'}</p>
        <p><strong>Interest Rate:</strong> {account.interestRate || '—'}%</p>
        <p><strong>Status:</strong> {account.status || 'Inactive'}</p>
      </div>

      {/* Loan Info */}
      <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
        <h3>💼 Loan Information</h3>
        <p><strong>Loan ID:</strong> {loan.loanId || '—'}</p>
        <p><strong>Product:</strong> {loan.product || '—'}</p>
        <p><strong>Principal:</strong> ₹{loan.principal || '0.00'}</p>
        <p><strong>Interest Rate:</strong> {loan.interestRate || '—'}%</p>
        <p><strong>Tenure:</strong> {loan.tenureMonths || '—'} months</p>
        <p><strong>EMI:</strong> ₹{loan.emi || '—'}</p>
      </div>

      {/* Transaction Summary */}
      <div style={{ border: '1px solid #ccc', padding: '15px' }}>
        <h3>💳 Transaction Summary</h3>
        <p><strong>Total Transactions:</strong> {transactions.length}</p>
        <p><strong>Total Amount Transacted:</strong> ₹{totalTxnAmount.toLocaleString()}</p>
        {lastTxn && (
          <>
            <p><strong>Last Transaction:</strong></p>
            <p>→ ₹{lastTxn.amount} to {lastTxn.accountHolder} ({lastTxn.accountNumber})</p>
            <p>Status: {lastTxn.status} | Date: {lastTxn.date}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
