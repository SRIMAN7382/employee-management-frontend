import React, { useEffect, useState } from 'react';
import EmployeeService from '../EmployeeService';
import { Link } from 'react-router-dom';

const EmployeeListComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = () => {
        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data);
        });
    };

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(() => {
            // Immediately update the UI after successful deletion
            setEmployees(employees.filter(employee => employee.id !== id));
        }).catch(error => {
            console.error("There was an error deleting the employee!", error);
        });
    };

    return (
        <div className="container employee-list-container">
            <h2 className="text-center">Employees List</h2>
            <Link to="/add-employee">
                <button className="btn btn-primary mb-2">Add Employee</button>
            </Link>

            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Email</th>
                        <th>Employee Department</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department}</td>
                            <td>{employee.salary}</td>
                            <td>
                                <Link to={`/edit-employee/${employee.id}`}>
                                    <button className="btn btn-info">Update</button>
                                </Link>
                                <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeListComponent;