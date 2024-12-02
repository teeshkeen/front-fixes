// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/LoginPage';
import AdminPage from './pages/admin/AdminPage';
import ProtectedRoute from './shared/ui/ProtectedRoute';
import NomenclaturePage from './pages/nomenclature/Nomenclature';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          } 
        />
        <Route path="/nomenclature/:id" element={<NomenclaturePage />} />
      </Routes>
    </Router>
  );
}

export default App;