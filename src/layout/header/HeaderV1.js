import React, { Component } from 'react';
import logo from '../../assets/images/logo/Marvel-Logo.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className={this.props.className}>
        <NavLink exatc to="/">
          <img className="center logo marvel" src={logo} alt="Logo da Marvel" description="Marvel logotipo" />
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
  