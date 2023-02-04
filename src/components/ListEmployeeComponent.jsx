import React, { Component } from "react";
import { Link } from "react-router-dom";
import CompanyManagementService from "../services/CompanyManagementService";

class ListEmployeeComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			employees: [],
		};
		this.deleteEmployee = this.deleteEmployee.bind(this);
	}

	componentDidMount() {
		CompanyManagementService.getEmployees().then(res => {
			this.setState({ employees: res.data });
		});
	}

	deleteEmployee(id) {
		CompanyManagementService.deleteEmployee(id).then(res => {
			this.setState({
				employees: this.state.employees.filter(employee => employee.id != id),
			});
		});
	}

	render() {
		return (
			<div>
				<h2 className='text-center'>Lista pracowników</h2>
				<Link to='/add-employee/_add'>
					<button style={{ marginBottom: "20px" }} className='btn btn-primary'>
						Dodaj pracownika
					</button>
				</Link>
				<div className='row'>
					<table className='table table-striped table-bordered'>
						<thead>
							<tr>
								<th>Imię </th>
								<th>Nazwisko</th>
								<th>Email</th>
								<th>Wynagrodzenie</th>
								<th>Akcje</th>
							</tr>
						</thead>
						<tbody>
							{this.state.employees.map(employee => (
								<tr key={employee.id}>
									<td>{employee.firstName}</td>
									<td>{employee.lastName}</td>
									<td>{employee.email}</td>
									<td>{employee.salary}</td>
									<td>
										<Link to={`/add-employee/${employee.id}`}>
											<button className='btn btn-info'>Edytuj</button>
										</Link>
										<button
											style={{ marginLeft: "20px" }}
											className='btn btn-danger'
											onClick={() => this.deleteEmployee(employee.id)}>
											Usuń
										</button>
										<Link to={`/view-employee/${employee.id}`}>
										<button
											style={{ marginLeft: "20px" }}
											className='btn btn-info'
											>
											Podgląd
										</button>
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default ListEmployeeComponent;
