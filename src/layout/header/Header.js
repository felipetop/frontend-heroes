import React, { Component } from 'react';
import logo from '../../assets/images/logo/Marvel.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="container">
        <NavLink exatc to="./">
          <img className="center logo marvel" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="text-center">{this.props.title}</h1>
        <div>
          {this.props.children}
        </div>
      </header>
    );
  }
}
  
export default Header;
  