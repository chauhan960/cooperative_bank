import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AuditLogItem = ({ log }) => {
  if (!log) return null;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle1">Entity: {log.entity}</Typography>
        <Typography>Action: {log.action}</Typography>
        <Typography>Performed By: {log.performedBy}</Typography>
        <Typography>Entity ID: {log.entityId}</Typography>
        <Typography>Timestamp: {log.timestamp}</Typography>
      </CardContent>
    </Card>
  );
};

export default AuditLogItem;
