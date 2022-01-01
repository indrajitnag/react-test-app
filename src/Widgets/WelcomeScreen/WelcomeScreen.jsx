import React, { useState } from 'react';
//import UXButton from '../../Components/ux-button/UXButton';
import UXHeading from '../../Components/ux-heading/uxheading';
import UXTextbox from '../../Components/ux-textbox/UXTextbox';
import './WelcomeScreen.css';

const WelcomeScreen = (props) => {
    return (
        <div className='welcomeScreenWrapper'>
            <UXHeading text={`Welcome ${props.userName}`}/>
        </div>
    )
}

export default WelcomeScreen
