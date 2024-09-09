import React, { useState } from 'react';
import EmployeeService from '../EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployeeComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = { name, email, department, salary };

        EmployeeService.createEmployee(employee).then(() => {
            navigate('/');
        }).catch(error => {
            console.error("There was an error creating the employee!", error);
        });
    };

    return (
        <div className="container">
            <h2 className="text-center">Add Employee</h2>
            <form onSubmit={saveEmployee}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Department:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Salary:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Save</button>
            </form>
        </div>
    );
};

export default AddEmployeeComponent;
