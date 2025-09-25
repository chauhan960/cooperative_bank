import React, { useEffect, useState } from 'react';

const AccountManager = () => {
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    memberId: '',
    accountId: '',
    type: '',
    balance: '',
    interestRate: '',
    status: '',
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('memberAccounts')) || [];
    setAccounts(saved);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let updated;
    if (editingId) {
      updated = accounts.map((acc) =>
        acc.accountId === editingId ? { ...formData } : acc
      );
      setEditingId(null);
    } else {
      updated = [...accounts, formData];
    }

    setAccounts(updated);
    localStorage.setItem('memberAccounts', JSON.stringify(updated));
    setFormData({
      memberId: '',
      accountId: '',
      type: '',
      balance: '',
      interestRate: '',
      status: '',
    });
  };

  const handleEdit = (account) => {
    setFormData(account);
    setEditingId(account.accountId);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>🏦 Account Manager</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input name="memberId" value={formData.memberId} onChange={handleChange} placeholder="Member ID" required style={inputStyle} />
        <input name="accountId" value={formData.accountId} onChange={handleChange} placeholder="Account ID" required style={inputStyle} />
        <input name="type" value={formData.type} onChange={handleChange} placeholder="Account Type" required style={inputStyle} />
        <input name="balance" value={formData.balance} onChange={handleChange} placeholder="Balance" required style={inputStyle} />
        <input name="interestRate" value={formData.interestRate} onChange={handleChange} placeholder="Interest Rate (%)" required style={inputStyle} />
        <input name="status" value={formData.status} onChange={handleChange} placeholder="Status" required style={inputStyle} />
        <button type="submit" style={buttonStyle}>
          {editingId ? 'Update Account' : 'Add Account'}
        </button>
      </form>

      {/* Account List */}
      {accounts.length === 0 ? (
        <p>No accounts found.</p>
      ) : (
        accounts.map((acc) => (
          <div key={acc.accountId} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '6px' }}>
            <p><strong>Member ID:</strong> {acc.memberId}</p>
            <p><strong>Account ID:</strong> {acc.accountId}</p>
            <p><strong>Type:</strong> {acc.type}</p>
            <p><strong>Balance:</strong> ₹{acc.balance}</p>
            <p><strong>Interest Rate:</strong> {acc.interestRate}%</p>
            <p><strong>Status:</strong> {acc.status}</p>
            <button onClick={() => handleEdit(acc)} style={editButtonStyle}>✏️ Edit</button>
          </div>
        ))
      )}
    </div>
  );
};

// 🔹 Styling
const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '12px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
  fontSize: '16px',
};

const editButtonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  padding: '6px 12px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default AccountManager;
