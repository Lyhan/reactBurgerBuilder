import React from "react";
import classes from './Spinner.css'

const Spinner = ()=>(
    <div style={{display:'flex',alignItems:'center'}} className={classes.LdsRipple}>
        <div></div>
        <div></div>
    </div>
)

export default Spinner;