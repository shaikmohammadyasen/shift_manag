import React from 'react';
import './Sidebar.css';

function Sidebar({ navigate }) {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => navigate('/shift-form')}>Schedule Shift</li>
        <li onClick={() => navigate('/dashboard')}>Dashboard</li>
        <li onClick={() => navigate('/manage-shifts')}>Manage Shifts</li>
        <li onClick={() => navigate('/employee-list')}>Employee List</li>
        <li onClick={() => navigate('/reports')}>Reports</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
