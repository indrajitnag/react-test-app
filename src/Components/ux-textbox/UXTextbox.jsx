import React from 'react';
import './UXTextbox.css';

const UXTextbox = (props) =>{
    return (
        <input type="text"  className="tb" onChange={props.onEdit}>
            
        </input>
    )
}

export default UXTextbox
