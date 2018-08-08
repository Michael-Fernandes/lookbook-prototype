import React, { Component } from 'react';

class HeaderNav extends Component {
    static defaultProps = {
        pages: ["Home", "Winter", "Summer"]
    } 

    render() {
        let pages = this.props.pages.map(page => {
            return <li className="nav-item" key={page}>{page}</li>
        })
        return (
            <ul className="header-nav">
                {pages}
            </ul>
        );
    }
}

export default HeaderNav;
