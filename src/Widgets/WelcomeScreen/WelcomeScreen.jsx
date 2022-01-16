import React, { useState } from 'react';
import UXHeading from '../../Components/ux-heading/uxheading';
import './WelcomeScreen.css';

const WelcomeScreen = (props) => {
    let headingObj = {
        heading : 'Good morning.',
        subHeading : 'Have a good day.'
    }
    return (
        <div className='welcomeScreenWrapper'>
            <UXHeading text={`Welcome ${props.userName}`} textObj={headingObj}/>
        </div>
    )
}

export default WelcomeScreen
