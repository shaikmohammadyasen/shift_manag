import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [shifts, setShifts] = useState([]);
  const [totalShifts, setTotalShifts] = useState(0);
  const [activeEmployees, setActiveEmployees] = useState(0);
  const [upcomingShifts, setUpcomingShifts] = useState(0);

  // Fetch shifts from API
  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/shifts");
        setShifts(response.data);

        // Assuming API returns relevant data
        setTotalShifts(response.data.length);
        setActiveEmployees(34); // Replace with actual API logic if available
        setUpcomingShifts(response.data.filter(shift => new Date(shift.startTime) > new Date()).length);
      } catch (error) {
        console.error("Error fetching shifts:", error);
      }
    };

    fetchShifts();
  }, []);

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Shift Management Dashboard</h2>

      {/* Statistic Cards */}
      <div className="stat-cards">
        <div className="card">
          <h3>Total Shifts</h3>
          <p className="card-value">{totalShifts}</p>
        </div>

        <div className="card">
          <h3>Active Employees</h3>
          <p className="card-value">{activeEmployees}</p>
        </div>

        <div className="card">
          <h3>Upcoming Shifts</h3>
          <p className="card-value">{upcomingShifts}</p>
        </div>
      </div>

      {/* Shift Schedule Table */}
      <div className="shift-table">
        <h3>Shift Schedules</h3>
        <table>
          <thead>
            <tr>
              <th>Shift Name</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift) => (
              <tr key={shift.id}>
                <td>{shift.name}</td>
                <td>{shift.startTime}</td>
                <td>{shift.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Placeholder for Chart */}
      <div className="charts">
        <h3>Upcoming Shift Statistics</h3>
        <div className="chart-placeholder">[Chart Area]</div>
      </div>
    </div>
  );
};

export default Dashboard;