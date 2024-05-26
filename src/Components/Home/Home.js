import React from "react";
import { Container } from "react-bootstrap";
import classes from './Home.module.css'
import TourTable from './TourTable'


const Store = (props) => {
    const data=[{date:'JUL16',
    place:'DETROIT, MI',
    name:'DTE ENERGY MUSIC THEATRE'},{date:'JUL26',
    place:'Toronto, ON',
    name:'BUDWEISER STAGE'}
];
    return (
      <React.Fragment>
        <Container className={classes.container} >
        <h1>Tours</h1>
        <TourTable data={data}></TourTable>
        
        </Container>
            <br></br>
      </React.Fragment>
    );
  };
  
  export default Store;
  