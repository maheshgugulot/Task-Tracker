import React from 'react'

const Button = ({color,text,onclick}) => {
  return (
    <button onClick={onclick} className='btn'
    style={{background:color}}
    >{text}</button>
  )
}

export default Button