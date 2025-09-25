import React, { useState } from 'react';

const KYCForm = () => {
  const [formData, setFormData] = useState({
    memberId: '',
    name: '',
    aadhar: '',
    pan: '',
    status: 'pending',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('kycRequests')) || [];
    existing.push(formData);
    localStorage.setItem('kycRequests', JSON.stringify(existing));
    alert('✅ KYC submitted!');
    setFormData({
      memberId: '',
      name: '',
      aadhar: '',
      pan: '',
      status: 'pending',
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>📋 Submit KYC</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="memberId"
          value={formData.memberId}
          onChange={handleChange}
          placeholder="Member ID"
          required
          style={inputStyle}
        />
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          style={inputStyle}
        />
        <input
          name="aadhar"
          value={formData.aadhar}
          onChange={handleChange}
          placeholder="Aadhar Number"
          required
          style={inputStyle}
        />
        <input
          name="pan"
          value={formData.pan}
          onChange={handleChange}
          placeholder="PAN Number"
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Submit KYC
        </button>
      </form>
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

export default KYCForm;
