import React from 'react';
import { Chip } from '@mui/material';

const StatusBadge = ({ status }) => {
  const color =
    status === 'verified' ? 'success' :
    status === 'pending' ? 'warning' :
    status === 'rejected' ? 'error' : 'default';

  return <Chip label={status} color={color} variant="outlined" />;
};

export default StatusBadge;
