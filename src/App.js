import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeListComponent from './components/EmployeeListComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import EditEmployeeComponent from './components/EditEmployeeComponent';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<EmployeeListComponent />} />
                    <Route path="/add-employee" element={<AddEmployeeComponent />} />
                    <Route path="/edit-employee/:id" element={<EditEmployeeComponent />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
