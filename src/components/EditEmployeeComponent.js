import React, { useEffect, useState } from 'react';
import EmployeeService from '../EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployeeComponent = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setName(response.data.name);
            setEmail(response.data.email);
            setDepartment(response.data.department);
        });
    }, [id]);

    const updateEmployee = (e) => {
        e.preventDefault();
        const employee = { name, email, department };

        EmployeeService.updateEmployee(id, employee).then(() => {
            navigate('/');
        });
    };

    return (
        <div className="container">
            <h2 className="text-center">Update Employee</h2>
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Department:</label>
                    <input type="text" className="form-control" value={department} onChange={(e) => setDepartment(e.target.value)} />
                </div>
                <button className="btn btn-success" onClick={updateEmployee}>Update</button>
            </form>
        </div>
    );
};

export default EditEmployeeComponent;
