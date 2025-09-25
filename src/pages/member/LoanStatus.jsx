import React , {useEffect,useState} from "react";

const LoanStatus = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('submittedLoans')) || [];
    setLoans(saved);
  }, []);

  return (
    <div>
      <h3>Your Loan Applications</h3>
      {loans.map((loan) => (
        <div key={loan.loanId} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <p>Loan ID: {loan.loanId}</p>
          <p>Product: {loan.product}</p>
          <p>Amount: ₹{loan.amount}</p>
          <p>Status: {loan.status}</p>
        </div>
      ))}
    </div>
  );
};

export default LoanStatus;
