import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import VendorManagement from './pages/VendorManagement'
import CivilProjectManagement from './pages/CivilProjectManagement'
import VendorPerformanceReports from './pages/VendorPerformanceReports'
import MaterialsInventory from './components/MaterialsInventory'
import Login from './components/Login'

function App() {

// remove the commented code for authentication

  // const [isAuthenticated, setIsAuthenticated] = useState(false)

  // const handleLogin = (credentials) => {
  //   // In a real application, you would validate credentials against a backend
  //   if (credentials.username === 'admin' && credentials.password === 'password') {
  //     setIsAuthenticated(true)
  //   } else {
  //     alert('Invalid credentials')
  //   }
  // }

  // if (!isAuthenticated) {
  //   return <Login onLogin={handleLogin} />
  // }

  return (
    <Router>
      <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-4 sm:p-8 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vendors" element={<VendorManagement />} />
            <Route path="/projects" element={<CivilProjectManagement />} />
            <Route path="/reports" element={<VendorPerformanceReports />} />
            <Route path="/inventory" element={<MaterialsInventory />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App