import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #2B3856; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #95B9C7;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

const NaviBar = () => {
    return(
        <Styles>
        <Navbar>
            <Navbar.Brand href="/viewAllAccount">My Appointment</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Logout</Nav.Link></Nav.Item>
              </Nav>
        </Navbar>
        </Styles>
    )
}

export default NaviBar;