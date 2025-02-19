import React, { useState } from 'react';
import './ShiftForm.css';

function ShiftForm() {
  const [shift, setShift] = useState({ 
    employee: '', 
    date: '', 
    shiftType: '', 
    startTime: '', 
    endTime: '' 
  });

  // Predefined shift times
  const shiftTimings = {
    morning: { start: "09:00", end: "13:00" },
    afternoon: { start: "13:00", end: "17:00" },
    night: { start: "17:00", end: "21:00" },
    other: { start: "", end: "" }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "shiftType") {
      // Update time based on shift type
      setShift({
        ...shift,
        shiftType: value,
        startTime: shiftTimings[value].start,
        endTime: shiftTimings[value].end
      });
    } else {
      setShift({ ...shift, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Shift Scheduled:', shift);
    setShift({ employee: '', date: '', shiftType: '', startTime: '', endTime: '' });
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
        <label>Shift Type</label>
        <select name="shiftType" value={shift.shiftType} onChange={handleChange} required>
          <option value="">Select Shift Type</option>
          <option value="morning">Morning (09:00 - 13:00)</option>
          <option value="afternoon">Afternoon (13:00 - 17:00)</option>
          <option value="night">Night (17:00 - 21:00)</option>
          <option value="other">Other (Custom)</option>
        </select>
      </div>

      <div className="form-group">
        <label>Start Time</label>
        <input
          type="time"
          name="startTime"
          value={shift.startTime}
          onChange={handleChange}
          required
          disabled={shift.shiftType !== "other"}
        />
      </div>

      <div className="form-group">
        <label>End Time</label>
        <input
          type="time"
          name="endTime"
          value={shift.endTime}
          onChange={handleChange}
          required
          disabled={shift.shiftType !== "other"}
        />
      </div>

      <button type="submit">Schedule Shift</button>
    </form>
  );
}

export default ShiftForm;