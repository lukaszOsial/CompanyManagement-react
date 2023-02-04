import axios from 'axios';

const COMPANY_MANAGEMENT_BASE_URL = "http://localhost:8080/api/v1/employees";

class CompanyManagementService {

    getEmployees() {
        return axios.get(COMPANY_MANAGEMENT_BASE_URL);
    }

    createEmployee(employee) {
        return axios.post(COMPANY_MANAGEMENT_BASE_URL, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(COMPANY_MANAGEMENT_BASE_URL + "/" + employeeId);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(COMPANY_MANAGEMENT_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(COMPANY_MANAGEMENT_BASE_URL + "/" + employeeId);
    }
}

export default new CompanyManagementService();