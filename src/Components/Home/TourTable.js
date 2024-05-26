import React from "react";
import { Button } from "react-bootstrap";
import classes from './TourTables.module.css'

const TourTable=(props)=>{
const list=props.data.map((c,i,a)=>{
    return(  <div className={classes.container}>
           
        
       
        <span className={classes.date}>
        {props.data[i].date}
    </span>
    <span className={classes.place}>
        {props.data[i].place}
    </span>
    <span className={classes.name}>
        {props.data[i].name}
    </span>
    <Button variant="primary" className={classes.button}>Buy Tickets</Button>
        </div>
    )
})

    return(
        <React.Fragment>{list}</React.Fragment>
        
    )
}
export default TourTable;