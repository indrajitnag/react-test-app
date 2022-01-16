import React from 'react';
import './calculator.css';
import UXTextbox from '../../Components/ux-textbox/UXTextbox';
import UXButton from '../../Components/ux-button/UXButton';
import { useState, useEffect } from 'react/cjs/react.development';

const Calculator = (Props) => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(null);
    const [topic, setTopic] = useState(null);
    const add = () => {
        setResult(+firstNumber + +secondNumber);
    }
    return (
        <div className='calculatorWrapper'>
            <h2>{topic}</h2>
            <UXTextbox value={firstNumber} onEdit={(e) => setFirstNumber(e.target.value)} />
            <UXTextbox value={secondNumber} onEdit={(e) => setSecondNumber(e.target.value)} />
            <UXButton text={'Calulate'} variant={'Primary'} onTap={() => add()} />
            {result ? <p>Result: {result}</p> : null}
        </div>
    )
}

export default Calculator;