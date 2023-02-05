import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import CompanyManagementService from '../services/CompanyManagementService'

export const withParams = Component => props => {
	let params = useParams();
	return <Component {...props} params={params} />;
};

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        let { id } = props.params;

        this.state = {
            id: id,
            employee: {}
        }
    }

    componentDidMount() {
        CompanyManagementService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>Dane pracownika</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label>Imie: </label>
                            <div>{this.state.employee.firstName}</div>
                        </div>
                        <div className='row'>
                            <label>Nazwisko: </label>
                            <div>{this.state.employee.lastName}</div>
                        </div>
                        <div className='row'>
                            <label>Email: </label>
                            <div>{this.state.employee.email}</div>
                        </div>
                        <div className='row'>
                            <label>Wynagrodzenie: </label>
                            <div>{this.state.employee.salary}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withParams(ViewEmployeeComponent);
