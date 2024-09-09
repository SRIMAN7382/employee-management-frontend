import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "https://employee-management-api-0dbe4349fd98.herokuapp.com/api/employees";

class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    getEmployeeById(employeeId) {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    updateEmployee(employeeId, employee) {
        return axios.put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
    }
}

export default new EmployeeService();
