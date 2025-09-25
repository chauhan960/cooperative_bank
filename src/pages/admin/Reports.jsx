import React, { useEffect, useState } from 'react';

const AdminReport = () => {
  const [members, setMembers] = useState([]);
  const [loans, setLoans] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [kycList, setKycList] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setMembers(JSON.parse(localStorage.getItem('allMembers')) || []);
    setLoans(JSON.parse(localStorage.getItem('submittedLoans')) || []);
    setTransactions(JSON.parse(localStorage.getItem('memberTransactions')) || []);
    setKycList(JSON.parse(localStorage.getItem('kycRequests')) || []);
    setAccounts(JSON.parse(localStorage.getItem('memberAccounts')) || []);
    setLogs(JSON.parse(localStorage.getItem('auditLogs')) || []);
  }, []);

  const totalLoanAmount = loans.reduce((sum, l) => sum + Number(l.amount || 0), 0);
  const totalTxnAmount = transactions.reduce((sum, t) => sum + Number(t.amount || 0), 0);
  const totalBalance = accounts.reduce((sum, a) => sum + Number(a.balance || 0), 0);

  const approvedLoans = loans.filter(l => l.status === 'approved').length;
  const rejectedLoans = loans.filter(l => l.status === 'rejected').length;
  const pendingLoans = loans.filter(l => l.status === 'pending').length;

  const verifiedKYC = kycList.filter(k => k.status === 'verified').length;
  const pendingKYC = kycList.filter(k => k.status === 'pending').length;

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', color: '#007bff' }}>📊 Admin Report</h2>

      <div style={sectionStyle}>
        <h3>👥 Member Summary</h3>
        <p>Total Members: {members.length}</p>
        <p>KYC Verified: {verifiedKYC}</p>
        <p>KYC Pending: {pendingKYC}</p>
      </div>

      <div style={sectionStyle}>
        <h3>💼 Loan Summary</h3>
        <p>Total Loans: {loans.length}</p>
        <p>Approved: {approvedLoans}</p>
        <p>Rejected: {rejectedLoans}</p>
        <p>Pending: {pendingLoans}</p>
        <p>Total Loan Amount: ₹{totalLoanAmount.toLocaleString()}</p>
      </div>

      <div style={sectionStyle}>
        <h3>💳 Transaction Summary</h3>
        <p>Total Transactions: {transactions.length}</p>
        <p>Total Transacted Amount: ₹{totalTxnAmount.toLocaleString()}</p>
      </div>

      <div style={sectionStyle}>
        <h3>🏦 Account Summary</h3>
        <p>Total Accounts: {accounts.length}</p>
        <p>Total Balance Across Accounts: ₹{totalBalance.toLocaleString()}</p>
      </div>

      <div style={sectionStyle}>
        <h3>📜 Audit Logs</h3>
        <p>Total Admin Actions Logged: {logs.length}</p>
      </div>
    </div>
  );
};

const sectionStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  marginBottom: '20px',
  borderRadius: '6px',
  backgroundColor: '#f9f9f9',
};

export default AdminReport;
