import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Manage Shifts</li>
        <li>Employee List</li>
        <li>Reports</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
