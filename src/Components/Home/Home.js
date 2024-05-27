import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import classes from './Home.module.css'
import TourTable from './TourTable'


const Store = (props) => {

const url='https://swapi.dev/api/films/'
const [movies,setMovies]=useState([]);


    const data=[{date:'JUL16',
    place:'DETROIT, MI',
    name:'DTE ENERGY MUSIC THEATRE'},{date:'JUL26',
    place:'Toronto, ON',
    name:'BUDWEISER STAGE'}
];

const getData=async()=>{

    try{
    let p=await fetch(url);
    p=await p.json();
    console.log(p)
    setMovies(p.results[0].title)
}
catch(err){console.log(err)}

}

    return (
      <React.Fragment>
        <Container className={classes.container} >
        <h1>Tours</h1>
        <TourTable data={data}></TourTable>
        
        </Container>
            <br></br>
  <Button onClick={getData} >Get Data</Button>
  <p>{movies}</p>
      </React.Fragment>
    );
  };
  
  export default Store;
  