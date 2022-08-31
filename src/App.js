
import React from 'react';
import './App.css';
import Input from './Input';
import Square from './Square';
import { useState } from 'react'

function App() {
  const [colourName, setColourName] = useState('')
  const [color, setColor] = useState('black')
  const colors = ['black', 'blue', 'white', 'brown']
  const fontColor = () => {
    const int = Math.floor(Math.random()*4)
    setColor(colors[int])
  }
  
  return (
    <div className="App">
     <Square 
     colourName={colourName}
     color={color}
     />
     <Input
      setColourName={setColourName} 
      colourName={colourName}
      fontColor={fontColor}
     />
    </div>
  );
}

export default App;
