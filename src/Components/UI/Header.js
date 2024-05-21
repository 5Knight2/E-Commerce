import React from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import classes from './Header.module.css';

const Header = () => {
  return (
    <React.Fragment>
    <Navbar bg="dark"  variant="dark" sticky='top'>
      <Container >
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Button variant="secondary">Cart</Button>
      </Container>
    </Navbar>
    <Container fluid  className={classes.container}>
    <h1 className={classes.h1}>
    The Generics
</h1>
    </Container>

    </React.Fragment>  );
}

export default Header;