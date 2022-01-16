import React, {useContext} from 'react';
import {currentYearContext} from '../../App.js';
import './uxheading.css';

const UXHeading = (props) => {
    const date = useContext(currentYearContext);
     console.log('date', date);
    return (
        <div>
            <h4>{date}</h4>
            {props.text ? <h1>{props.text}</h1> : null}
            {props.textObj && props.textObj.heading ? <h1>{props.textObj.heading}</h1> : null}
            {props.textObj && props.textObj.subHeading ? <h2>{props.textObj.subHeading}</h2> : null}
        </div>
    )
}

export default UXHeading
