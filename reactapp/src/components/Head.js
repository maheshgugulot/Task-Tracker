import React from 'react'
import Button from './Button'

const Head = ({title,show,add}) => {
    return (
    <div className='header'>
        <h1>{title}</h1>
        {!add?(<Button onclick={()=>show(add)} color='green' text='Add'/>)
    :(<Button onclick={()=>show(add)} color='red' text='Close'/>)
}

    </div>
  )
}

export default Head