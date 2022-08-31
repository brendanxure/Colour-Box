import React from 'react'

const Input = ({colourName, setColourName, fontColor}) => {
    const inputtext = (e)=> {
        setColourName(e.target.value)
    }
  return (
    <div className='input1'>
        <input className='inputtext' value={colourName} onChange={inputtext} type='text' role='textbox' required autoFocus placeholder='Input colour name, hex value or rgb() here'></input>
        <button className='inputtext' type='button' role='button' onClick={()=>fontColor()}>Visible Font colour</button>
    </div>
  )
}

export default Input