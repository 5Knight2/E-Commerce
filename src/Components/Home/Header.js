import React, { useContext } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import classes from './Header.module.css';
import CartContext from '../../Store/CartContext';

const Header = (props) => {

  const ctx=useContext(CartContext)

  return (
    <React.Fragment>
    <Navbar bg="dark"  variant="dark" sticky='top'>
      <Container >
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Button variant="secondary" onClick={props.cartClicked}>Cart</Button>
        <p className={classes.p}>{ctx.items.length}</p>
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
