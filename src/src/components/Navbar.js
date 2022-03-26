// Libraries.
import React from "react";
import {Navbar as BootstrapNavbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";


const NavbarBrand = function(){
  /// @description Brand for navbar.
  return (
      <BootstrapNavbar.Brand>
          <span className="display-6 text-center">Kirill Zhosul</span>
      </BootstrapNavbar.Brand>
  )
}


const NavbarButtons = function(){
  /// @description Buttons for navbar.
  return (
      <BootstrapNavbar.Collapse id="navbarScroll">
        <Nav navbarScroll>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/contacts" className="nav-link">Contacts</Link>
            <Link to="/status" className="nav-link">Statuses</Link>
            
        </Nav>
      </BootstrapNavbar.Collapse>
  )
}


const Navbar = function() {
  /// @description Navigation bar.
  return (
      <BootstrapNavbar bg="light" expand="md" className="border-bottom container-fluid">
          <NavbarBrand/>
          <BootstrapNavbar.Toggle aria-controls="navbarScroll"/>
          <NavbarButtons/>
      </BootstrapNavbar>
  )
}


export default Navbar;
