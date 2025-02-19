import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Reports.css";

const Reports = () => {
  // Sample shift data (Replace with real API data)
  const shiftData = [
    { date: "Feb 1", scheduled: 10, completed: 7 },
    { date: "Feb 2", scheduled: 8, completed: 6 },
    { date: "Feb 3", scheduled: 12, completed: 10 },
    { date: "Feb 4", scheduled: 15, completed: 12 },
    { date: "Feb 5", scheduled: 14, completed: 13 },
    { date: "Feb 6", scheduled: 9, completed: 7 },
    { date: "Feb 7", scheduled: 11, completed: 9 },
  ];

  return (
    <div className="shift-trends">
      <h2>Shift Trends & Analytics</h2>

      {/* Line Chart - Shift Trends Over Time */}
      <div className="chart-container">
        <h3>Shifts Scheduled vs. Completed (Last 7 Days)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={shiftData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="scheduled"
              stroke="#007bff"
              name="Scheduled Shifts"
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#28a745"
              name="Completed Shifts"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart - Peak Shift Hours */}
      <div className="chart-container">
        <h3>Peak Shift Hours</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[
              { time: "Morning", employees: 15 },
              { time: "Afternoon", employees: 10 },
              { time: "Night", employees: 8 },
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="employees"
              fill="#ffc107"
              name="Employees Scheduled"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
