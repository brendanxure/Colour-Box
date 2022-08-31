import colors from 'colornames/colors'
import React from 'react'


const Square = ({colourName, color}) => {
    const hexcolor = colors.filter((eachcolor)=> eachcolor.name === 'blue')
    const newhex = hexcolor[0].value
    console.log(newhex)
  return (
    <div className='square1'>
        <div className='square' style={{backgroundColor: colourName, color: color}}>
        {colourName ? colourName : 'Empty'}
        </div>
    </div>
  )
}

export default Square