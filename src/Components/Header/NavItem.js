import React, { Component } from 'react';

class NavItem extends Component {
    render() {
        return (
            <li>{this.state.props}</li>
        );
    }
}

export default NavItem;
