import React, { useState, useEffect } from 'react';
import {
  Box, TextField, Button, Typography, Paper, Divider
} from '@mui/material';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [editing, setEditing] = useState(false);

  // Load saved profile from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('memberProfile'));
    if (saved) setProfile(saved);
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    localStorage.setItem('memberProfile', JSON.stringify(profile));
    setEditing(false);
    alert('✅ Profile updated!');
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>👤 Member Profile</Typography>
        <Divider sx={{ mb: 2 }} />

        {/* Display Saved Profile */}
        {!editing && (
          <>
            <Typography><strong>Name:</strong> {profile.name || '—'}</Typography>
            <Typography><strong>Email:</strong> {profile.email || '—'}</Typography>
            <Typography><strong>Phone:</strong> {profile.phone || '—'}</Typography>
            <Typography><strong>Address:</strong> {profile.address || '—'}</Typography>

            <Button variant="contained" sx={{ mt: 3 }} onClick={() => setEditing(true)}>
              ✏️ Update Profile
            </Button>
          </>
        )}

        {/* Editable Form */}
        {editing && (
          <>
            <TextField
              label="Full Name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button variant="contained" color="primary" onClick={handleUpdate}>
                💾 Save Changes
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => setEditing(false)}>
                ❌ Cancel
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default Profile;
