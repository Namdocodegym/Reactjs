import React, { useState } from "react";

const Calculator = () =>{

    const[number,setNumber] = useState(0)
    const [inputValue,setInputValue] =useState('')
    const[result,setResult] =useState(0)

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAdd = () => {
        setResult(number + parseFloat(inputValue))
    }

    const handleSubtract = () => {
        setResult(number - parseFloat(inputValue))
    }

    const handleMultiply = () => {
        setResult(number * parseFloat(inputValue))
    }

    const handleDivide = () => {
        setResult(number / parseFloat(inputValue))
    }


    return(
        <label>
            <input type="number" value={number} onChange={(e) => setNumber(parseFloat(inputValue))} /> <br />
            <input type="number" value={inputValue} onChange={handleInputChange} /> <br />
            Result:{result} <br />
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSubtract}>-</button>
            <button onClick={handleMultiply}>*</button>
            <button onClick={handleDivide}>/</button>
        </label>

    )
}

export default Calculator;