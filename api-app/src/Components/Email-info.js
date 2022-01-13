import React, { Component } from 'react';

class EmailInfo extends Component {
    render(props) {
        return (
            <div>
                <h1> Status:{this.props.info?.status}</h1>
                <h1>Email: {this.props.info?.email}</h1>
                <h1>Domain:{this.props.info?.domain}</h1>
            </div>
        );
    }
}

export default EmailInfo;
