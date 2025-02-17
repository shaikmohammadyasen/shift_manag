import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ShiftForm from './components/ShiftForm';
import Dashboard from './components/Dashboard';
import ManageShifts from './components/ManageShifts';
import EmployeeList from './components/EmployeeList';
import Reports from './components/Reports';
import './App.css';

function App() {
  const [route, setRoute] = useState(window.location.pathname || '/shift-form');

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setRoute(path);
  };

  const renderRoute = () => {
    switch (route) {
      case '/shift-form':
        return <ShiftForm />;
      case '/dashboard':
        return <Dashboard />;
      case '/manage-shifts':
        return <ManageShifts />;
      case '/employee-list':
        return <EmployeeList />;
      case '/reports':
        return <Reports />;
      default:
        return <ShiftForm />;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar navigate={navigate} />
        <div className="content-area">{renderRoute()}</div>
      </div>
    </div>
  );
}

export default App;
