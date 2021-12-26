import React, { useState } from 'react';
import UXButton from '../../Components/ux-button/UXButton';
import UXHeading from '../../Components/ux-heading/uxheading';
import './WelcomeScreen.css';

const WelcomeScreen = (props) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(0);
    }
    return (
        <div className='welcomeScreenWrapper'>
            <UXHeading text={`Count is: ${counter}`} />
            <UXButton text={'Increment'} variant={'primary'} onTap={() => increment()}/>
            <UXButton text={'Decrement'} variant={'danger'} onTap={() => decrement()} />
            <UXButton text={'Reset'} variant={'info'} onTap={() => reset()} />
        </div>
    )
}

export default WelcomeScreen
