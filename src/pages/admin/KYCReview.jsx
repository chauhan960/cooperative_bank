import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import StatusBadge from '../../components/StatusBadge';

const mockKYC = {
  aadhar: 'xxxx-xxxx-xxxx',
  pan: 'ABCDE1234F',
  documents: [
    { type: 'aadhar', url: 's3://...', status: 'verified' },
  ],
  verified: false,
};

const KYCReview = () => (
  <Card sx={{ mt: 2 }}>
    <CardContent>
      <Typography variant="h6">KYC Review</Typography>
      <Typography>Aadhar: {mockKYC.aadhar}</Typography>
      <Typography>PAN: {mockKYC.pan}</Typography>
      <StatusBadge status={mockKYC.documents[0].status} />
      <Button variant="contained" sx={{ mt: 2 }}>Approve KYC</Button>
    </CardContent>
  </Card>
);

export default KYCReview;
