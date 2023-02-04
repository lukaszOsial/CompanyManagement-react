import React, { Component } from "react";
import { Link } from "react-router-dom";
import CompanyManagementService from "../services/CompanyManagementService";

class ListEmployeeComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			employees: [],
		};
	}

	componentDidMount() {
		CompanyManagementService.getEmployees().then(res => {
			this.setState({ employees: res.data });
		});
	}

	render() {
		return (
			<div>
				<h2 className='text-center'>Lista pracowników</h2>
				<Link to='/add-employee/_add'>
					<button className='btn btn-primary'>Dodaj pracownika</button>
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
										<button
											className='btn btn-info'
										>
											Edytuj
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
