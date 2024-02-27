import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  const removeitem = ()=> {
     setInput.value=setInput.value.slice(0,-1)
  };

  return (
    <div  className='c'>
    <div className="calculator">
      <div className="display border">{input}</div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button  style={{backgroundColor:"red"}} onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button style={{backgroundColor:"green"}} onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button  style={{backgroundColor:"green"}} onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button  style={{backgroundColor:"green"}} onClick={() => handleClick('.')}>.</button>
        <button  style={{backgroundColor:"white"}} onClick={handleCalculate}>=</button>
        <button  style={{backgroundColor:"green"}} onClick={() => handleClick('+')}>+</button>

        <button   style={{backgroundColor:"green"}}onClick={removeitem}>x</button>

        <button   style={{backgroundColor:"red"}}onClick={handleClear}>AC</button>
      
      </div>
    </div>
  </div>
  );
};

export default Calculator;