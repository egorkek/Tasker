import React from 'react'
import classes from './Button.css'


const Button =(props)=>{
    const cls=[classes.Button, props.type? classes[props.type] : null];
    return(
        <button className={cls.join(' ')} onClick={props.onClick} disabled={props.disabled} >{props.children}</button>
    )

};
export default Button