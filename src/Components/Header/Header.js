import React, { Component } from 'react';
import HeaderNav from "./HeaderNav";
import HeaderTools from "./HeaderTools"

class Header extends Component {
  render() {
    return (
      <header className="header">
        <HeaderNav />
        <HeaderTools />
        <div className="header-fix">
        </div>
      </header>
    );
  }
}

export default Header;
