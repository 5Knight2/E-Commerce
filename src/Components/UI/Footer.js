import React from 'react';
import { Container } from 'react-bootstrap';
import classes from './Footer.module.css';
import youtube from './Logo/youtube.jpg'
import spotify from './Logo/Spotify Logo.png'
import facebook from './Logo/Facebook Logo.png'

const Footer = () => {
  return (
    <Container fluid  className={classes.container}>
    <h1 className={classes.h1}>
    The Generics</h1>
    <div>
    <a className={classes.a} href="https://www.youtube.com/"><img className={classes.img} src={youtube} ></img>
    </a>
    <a className={classes.a} href="https://www.spotify.com"><img className={classes.img} src={spotify} ></img>
    </a>
    <a className={classes.a} href="https://www.facebook.com"><img className={classes.img} src={facebook} ></img>
    </a>
    </div>
  
    </Container>

  )}

  export default Footer;