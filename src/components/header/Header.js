import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Header extends Component {

  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">AlloMovie tag</a>
        <NavLink to="/films" className="nav-link" activeClassName="active" class='right'> Home </NavLink>
        <NavLink to="/favoris" className="nav-link" activeClassName="active" class='right'> Favoris</NavLink>
        
      </header>
    );
  }

}