import React from 'react';
import './UXButton.css';

const UXButton = (props) => {
    return (
       <button className={`btn ${props.variant}`} >
           {props.text}
       </button>
    )
}

export default UXButton;
