import React from 'react';

const EmployeeTable = ({ employees }) => {
    return (
        <table className="employee-table">
            <thead>
            <tr>
                <th>SI.NO</th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Salary</th>
                <th>Role</th>
            </tr>
            </thead>
            <tbody>
            {employees.map((employee, index) => (
                <tr key={employee.id}>
                    <td>{index + 1}</td>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.role}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
