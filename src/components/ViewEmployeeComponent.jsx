import React, { Component } from 'react';
import { useParams } from "react-router-dom";

export const withParams = Component => props => {
	let params = useParams();
	return <Component {...props} params={params} />;
};

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        let { id } = props.params;

        this.state = {
            id: id
        }
    }

    render() {
        return (
            <div>
                <h2>Dane pracownika</h2>
            </div>
        );
    }
}

export default withParams(ViewEmployeeComponent);
