import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Auth
import { AuthProvider } from "./pages/auth/AuthContext";
import ProtectedRoute from "./pages/auth/ProtectedRoute"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

// Layouts
import MemberLayout from "./layouts/MemberLayout";
import AdminLayout from "./layouts/AdminLayout";

// Member Pages
import Dashboard from "./pages/member/Dashboard";
import Profile from "./pages/member/Profile";
import LoanForm from "./pages/member/LoanForm";
import LoanStatus from "./pages/member/LoanStatus";
import Transactions from "./pages/member/Transactions";
import MemberReports from "./pages/member/Reports";

// Admin Pages
import LoanApproval from "./pages/admin/LoanApproval";
import KYCReview from "./pages/admin/KYCReview";
import AccountManager from "./pages/admin/AccountManager";
import AuditLogs from "./pages/admin/AuditLogs";
import AdminReports from "./pages/admin/Reports";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Member Protected Routes */}
          <Route element={<ProtectedRoute allowedRole="member" />}>
            <Route path="/member" element={<MemberLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="loan/apply" element={<LoanForm />} />
              <Route path="loan/status" element={<LoanStatus />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="reports" element={<MemberReports />} />
            </Route>
          </Route>

          {/* Admin Protected Routes */}
          <Route element={<ProtectedRoute allowedRole="admin" />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="loans" element={<LoanApproval />} />
              <Route path="kyc" element={<KYCReview />} />
              <Route path="accounts" element={<AccountManager />} />
              <Route path="audit" element={<AuditLogs />} />
              <Route path="reports" element={<AdminReports />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;