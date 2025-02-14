import React from 'react';
import './ShiftTable.css';

function ShiftTable() {
  const sampleShifts = [
    { id: 1, employee: 'John Doe', date: '2025-02-14', time: '09:00 - 17:00' },
    { id: 2, employee: 'Jane Smith', date: '2025-02-15', time: '10:00 - 18:00' },
  ];

  return (
    <div className="shift-table">
      <h2>Scheduled Shifts</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {sampleShifts.map((shift) => (
            <tr key={shift.id}>
              <td>{shift.id}</td>
              <td>{shift.employee}</td>
              <td>{shift.date}</td>
              <td>{shift.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShiftTable;
