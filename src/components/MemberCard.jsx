import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MemberCard = ({ member }) => {
  if (!member) return null;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{member.name}</Typography>
        <Typography>ID: {member.memberId}</Typography>
        <Typography>Email: {member.email}</Typography>
        <Typography>Mobile: {member.mobile}</Typography>
        <Typography>Status: {member.kyc?.verified ? 'Verified' : 'Unverified'}</Typography>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
