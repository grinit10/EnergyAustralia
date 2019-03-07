﻿import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/'>Energy Australia</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={'/'} exact>
          <NavItem>
            {/* <Glyphicon glyph='home' />  */}
            Home
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/cars'}>
          <NavItem>
            {/* <Glyphicon glyph='plane' />  */}
            Cars
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
