import React, { useState } from 'react';
import './ShiftForm.css';

function ShiftForm() {
  const [shift, setShift] = useState({ employee: '', date: '', time: '' });

  const handleChange = (e) => {
    setShift({ ...shift, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Shift Scheduled:', shift);
    setShift({ employee: '', date: '', time: '' });
  };

  return (
    <form className="shift-form" onSubmit={handleSubmit}>
      <h2>Schedule a Shift</h2>
      <div className="form-group">
        <label>Employee Name</label>
        <input
          type="text"
          name="employee"
          value={shift.employee}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={shift.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Time</label>
        <input
          type="time"
          name="time"
          value={shift.time}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Schedule Shift</button>
    </form>
  );
}

export default ShiftForm;
