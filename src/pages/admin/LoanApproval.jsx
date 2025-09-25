import React , {useEffect,useState} from 'react';
import LoanForm from '../member/LoanForm'

const LoanApproval = () => {
  const [loans, setLoans] = useState([]);

  // Load loans from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('submittedLoans')) || [];
    setLoans(saved);
  }, []);

  // Update loan status and localStorage
  const updateStatus = (loanId, newStatus) => {
    const updatedLoans = loans.map((loan) =>
      loan.loanId === loanId ? { ...loan, status: newStatus } : loan
    );
    setLoans(updatedLoans);
    localStorage.setItem('submittedLoans', JSON.stringify(updatedLoans));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🗂️ Loan Approval Panel</h2>
      {loans.filter((loan) => loan.status === 'pending').length === 0 ? (
        <p>No pending loans.</p>
      ) : (
        loans
          .filter((loan) => loan.status === 'pending')
          .map((loan) => (
            <div key={loan.loanId} style={{ border: '1px solid #ccc', padding: '12px', marginBottom: '10px' }}>
              <p><strong>Loan ID:</strong> {loan.loanId}</p>
              <p><strong>Product:</strong> {loan.product}</p>
              <p><strong>Amount:</strong> ₹{loan.amount}</p>
              <p><strong>Status:</strong> {loan.status}</p>
              <button onClick={() => updateStatus(loan.loanId, 'approved')} style={{ marginRight: '10px' }}>
                ✅ Approve
              </button>
              <button onClick={() => updateStatus(loan.loanId, 'rejected')}>
                ❌ Reject
              </button>
            </div>
          ))
      )}
    </div>
  );
};

export default LoanApproval;
