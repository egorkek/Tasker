import React from 'react'
import classes from './Input.css'

const Input = (props)=>{

return(
    <div className={classes.Input}>
        <label >{props.label}</label>
        <br/>
        <input className={props.isValid ? null : classes.error } value={props.value} type={props.type} onChange={props.onChange}/>
    </div>
)

};
export default Input