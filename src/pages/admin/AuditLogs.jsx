import React, { useEffect, useState } from 'react';

const AuditLogs = () => {
  const [logs, setLogs] = useState([]);
  const [formData, setFormData] = useState({
    action: '',
    admin: '',
    target: '',
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('auditLogs')) || [];
    setLogs(saved);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddLog = (e) => {
    e.preventDefault();
    const newLog = {
      ...formData,
      timestamp: new Date().toLocaleString(),
    };
    const updated = [...logs, newLog];
    setLogs(updated);
    localStorage.setItem('auditLogs', JSON.stringify(updated));
    setFormData({ action: '', admin: '', target: '' });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>📜 Audit Logs</h2>

      {/* Form to Add Log */}
      <form onSubmit={handleAddLog} style={{ marginBottom: '20px' }}>
        <input name="action" value={formData.action} onChange={handleChange} placeholder="Action (e.g. Approved KYC)" required style={inputStyle} />
        <input name="admin" value={formData.admin} onChange={handleChange} placeholder="Admin Name" required style={inputStyle} />
        <input name="target" value={formData.target} onChange={handleChange} placeholder="Target Member ID" required style={inputStyle} />
        <button type="submit" style={buttonStyle}>Add Log</button>
      </form>

      {/* Log List */}
      {logs.length === 0 ? (
        <p>No audit logs found.</p>
      ) : (
        logs.map((log, index) => (
          <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <p><strong>Action:</strong> {log.action}</p>
            <p><strong>Admin:</strong> {log.admin}</p>
            <p><strong>Target:</strong> {log.target}</p>
            <p><strong>Time:</strong> {log.timestamp}</p>
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

export default AuditLogs;
