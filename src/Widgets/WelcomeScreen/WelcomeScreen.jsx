import React from 'react';
import UXButton from '../../Components/ux-button/uxbutton';
import UXHeading from '../../Components/ux-heading/uxheading';
import './WelcomeScreen.css';

const WelcomeScreen = (props) => {
    return (
        <div className='welcomeScreenWrapper'>
            <UXHeading text={`Welcome ${props.userName}`}/>
            <UXButton text={`Login`}/>
        </div>
    )
}

export default WelcomeScreen
