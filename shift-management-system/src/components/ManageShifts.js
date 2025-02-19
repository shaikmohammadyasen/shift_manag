import React, { useState } from 'react';
import './ManageShifts.css';

function ManageShifts() {
  const [shifts, setShifts] = useState([
    { id: 1, employee: 'John Doe', date: '2025-02-14', shiftType: 'Morning', time: '09:00 - 17:00' },
    { id: 2, employee: 'Jane Smith', date: '2025-02-15', shiftType: 'Afternoon', time: '10:00 - 18:00' },
  ]);

  return (
    <div className="manage-shifts">
      <h2>Manage Shifts</h2>
      
      <table className="shifts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Date</th>
            <th>Shift Type</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((shift) => (
            <tr key={shift.id}>
              <td>{shift.id}</td>
              <td>{shift.employee}</td>
              <td>{shift.date}</td>
              <td className={`shift-type ${shift.shiftType.toLowerCase()}`}>{shift.shiftType}</td>
              <td>{shift.time}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageShifts;