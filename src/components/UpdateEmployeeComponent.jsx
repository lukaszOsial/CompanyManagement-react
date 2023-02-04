import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CompanyManagementService from "../services/CompanyManagementService";

export const withParams = Component => props => {
    let params = useParams();
    return <Component  {...props} params={params} />;
}

class UpdateEmployeeComponent extends Component {
	constructor(props) {
		super(props);

        let{id} = props.params;
        
		this.state = {
			id: id,
			firstName: "",
			lastName: "",
			email: "",
			salary: ""
		};
		this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
		this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
		this.changeEmailHandler = this.changeEmailHandler.bind(this);
		this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
		this.updateEmployee = this.updateEmployee.bind(this);
	}

	changeFirstNameHandler = event => {
		this.setState({ firstName: event.target.value });
	};

	changeLastNameHandler = event => {
		this.setState({ lastName: event.target.value });
	};

	changeEmailHandler = event => {
		this.setState({ email: event.target.value });
	};

	changeSalaryHandler = event => {
		this.setState({ salary: event.target.value });
	};

	componentDidMount() {
		CompanyManagementService.getEmployeeById(this.state.id).then((res) => {
			let employee = res.data;
			this.setState({
				firstName: employee.firstName,
				lastName: employee.lastName,
				email: employee.email,
				salary: employee.salary
			});
		});
	}

	updateEmployee = () => {
		let employee = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			salary: this.state.salary,
		};
		console.log("employee => " + JSON.stringify(employee));

		CompanyManagementService.updateEmployee(employee, this.state.id);
	};

	render() {
		return (
			<div>
				<div className='container'>
					<div className='row'>
						<div className='card col-md-6 offset-md-3 offset-md-3'>
							<h3 className='text-center'>Edytuj pracownika</h3>
							<div className='card-body'>
								<form>
									<div className='form-group'>
										<label>Imię:</label>
										<input
											name='firstName'
											className='form-control'
											value={this.state.firstName}
											onChange={this.changeFirstNameHandler}
										/>
										<label>Nazwisko:</label>
										<input
											name='lastName'
											className='form-control'
											value={this.state.lastName}
											onChange={this.changeLastNameHandler}
										/>
										<label>Email:</label>
										<input
											name='email'
											className='form-control'
											value={this.state.email}
											onChange={this.changeEmailHandler}
										/>
										<label>Wynagrodzenie:</label>
										<input
											name='salary'
											className='form-control'
											value={this.state.salary}
											onChange={this.changeSalaryHandler}
										/>
									</div>
									<Link to='/employees'>
										<button
											className='btn btn-success'
											onClick={this.updateEmployee}>
											Zapisz
										</button>
									</Link>
									<Link to='/employees'>
										<button
											className='btn btn-danger'
											style={{ marginLeft: "10px" }}>
											Anuluj
										</button>
									</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withParams(UpdateEmployeeComponent);

