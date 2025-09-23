import React from 'react';
import AuditLogItem from '../../components/AuditLogItem';

const mockLogs = [
  {
    entity: 'transactions',
    entityId: 'TXN-900001',
    action: 'create',
    performedBy: 'staff-1',
    timestamp: '2025-09-20T10:00:00Z',
  },
];

const AuditLogs = () => (
  <div>
    <h2>Audit Logs</h2>
    {mockLogs.map((log, index) => (
      <AuditLogItem key={index} log={log} />
    ))}
  </div>
);

export default AuditLogs;
