import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expend-md navbar-dark bg-dark'>
                        <div><a href="/employees" className='navbar-brand'>Comapany Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;