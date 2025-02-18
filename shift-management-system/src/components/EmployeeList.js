import React from "react";
import "./EmployeeList.css";

const EmployeeList = () => {
  // Sample employee data (replace with API data if needed)
  const employees = [
    { id: 1, name: "John Doe", role: "Software Engineer", shift: "Morning" },
    { id: 2, name: "Jane Smith", role: "HR Manager", shift: "Afternoon" },
  ];

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Shift</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.shift}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
