import React from 'react';
import MemberCard from '../../components/MemberCard';
import StatusBadge from '../../components/StatusBadge';

const mockMember = {
  memberId: 'MSR-0001',
  name: 'Satyan Ray',
  email: 'user@example.com',
  mobile: '919XXXXXXXXX',
  dob: '1988-01-01',
  kyc: {
    aadhar: 'xxxx-xxxx-xxxx',
    pan: 'ABCDE1234F',
    documents: [{ type: 'aadhar', url: 's3://...', status: 'verified' }],
    verified: false,
  },
  joinedAt: '2025-09-16T12:00:00Z',
  role: 'member',
  status: 'active',
};

const Profile = () => (
  <div>
    <h2>Member Profile</h2>
    <MemberCard member={mockMember} />
    <p>Date of Birth: {mockMember.dob}</p>
    <p>Joined At: {new Date(mockMember.joinedAt).toLocaleDateString()}</p>
    <StatusBadge status={mockMember.kyc.documents[0].status} />
  </div>
);

export default Profile;
