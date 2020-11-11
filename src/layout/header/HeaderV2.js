import React, { Component } from 'react';
import logo from '../../assets/images/logo/Marvel-Logo-2.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <header className="Header-v2">
          <div className="head-logo">
            <NavLink exatc to="/">
              <img className="marvel" src={logo} alt="Logo da Marvel" description="Marvel logotipo" />
            </NavLink>
          </div>
          <div className="header-content">
            {this.props.children}
          </div>
        </header>
      </div>
    );
  }
}
  
export default Header;
  