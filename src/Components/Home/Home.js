import React, { useState,useRef } from "react";
import { Button, Container } from "react-bootstrap";
import classes from './Home.module.css'
import TourTable from './TourTable'


const Store = (props) => {

const url='https://swapi.dev/api/film/'
const [movies,setMovies]=useState([]);
const [isLoading,setIsLoading]=useState(false);
const [error,setError]=useState(false);
const [retry,setRetry]=useState(true);
const retryTimeoutRef=useRef();


    const data=[{date:'JUL16',
    place:'DETROIT, MI',
    name:'DTE ENERGY MUSIC THEATRE'},{date:'JUL26',
    place:'Toronto, ON',
    name:'BUDWEISER STAGE'}
];


const cancelRetry=()=>{
    setRetry(false)
    if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    console.log('retry cancelled',retry)
}



const startRetry=()=>{
    if(retry===true)getData();
    else console.log('stopped');
}

const getData=async()=>{

    
    try{
        
        setIsLoading(true);
    let p=await fetch(url);
    if(!p.ok)throw new Error('Something went wrong!!  Retrying...')
    setError(false)
    p=await p.json();
    console.log(p)
    setMovies(p.results[0].title)
    setIsLoading(false)
   
}
catch(err){
    setError(err.message);
    setIsLoading(false);
    if(retry==true)
   retryTimeoutRef.current=setTimeout((a)=>{
startRetry()}
,5000)

}

}



    return (
      <React.Fragment>
        <Container className={classes.container} >
        <h1>Tours</h1>
        <TourTable data={data}></TourTable>
        
        </Container>
            <br></br>
  <Button onClick={startRetry} >Get Data</Button>
  {}
  {error!=false?<p>{error} <Button onClick={cancelRetry}>X</Button></p> :isLoading==true?<p>loading...</p>:<p>{movies}</p>}
      </React.Fragment>
    );
  };
  
  export default Store;
  