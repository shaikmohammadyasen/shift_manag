// src/components/Dashboard.js

import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="stat-cards">
        <div className="card">
          <h3>Total Shifts</h3>
          <p className="card-value">152</p>
        </div>

        <div className="card">
          <h3>Active Employees</h3>
          <p className="card-value">34</p>
        </div>

        <div className="card">
          <h3>Upcoming Shifts</h3>
          <p className="card-value">12</p>
        </div>
      </div>

      <div className="charts">
        <h3>Upcoming Shift Statistics</h3>
        {/* Placeholder for charts, can integrate libraries like Chart.js here */}
        <div className="chart-placeholder">[Chart Area]</div>
      </div>
    </div>
  );
}

export default Dashboard;
