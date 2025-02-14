import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ShiftTable from './components/ShiftTable';
import ShiftForm from './components/ShiftForm';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <ShiftForm />
          <ShiftTable />
        </div>
      </div>
    </div>
  );
}

export default App;
