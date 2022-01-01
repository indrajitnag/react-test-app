import React from 'react';
import './calculator.css';
import UXTextbox from '../../Components/ux-textbox/UXTextbox';
import UXButton from '../../Components/ux-button/UXButton';
import { useState } from 'react/cjs/react.development';

const Calculator = (Props) =>{
    const [firstNumber,setFirstNumber] = useState(0);
    const [secondNumber,setSecondNumber] = useState(0);
    const [result,setResult] =useState(0);
    const add = () =>{
        setResult (+firstNumber + +secondNumber);
    }
  
    return(
        <div className='calculatorWrapper'>
        
            <UXTextbox onEdit ={(e) => setFirstNumber(e.target.value)}/>
            <UXTextbox onEdit ={(e) => setSecondNumber(e.target.value)}/>
            <UXButton text ={'Calulate'} variant ={'Primary'} onTap ={()=> add() } />
            <p>Result: {result}</p>
        </div>
    )
}

export default Calculator;