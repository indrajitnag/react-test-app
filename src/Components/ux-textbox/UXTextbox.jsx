import React from 'react';
import './UXTextbox.css';

const UXTextbox = (props) =>{
    return (
        <input type={props.type} className="tb" onChange={props.onEdit} value={props.value}>
            
        </input>
    )
}

export default UXTextbox
