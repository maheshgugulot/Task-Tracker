
import React from 'react'
import  Edit from './Edit'

const Navedit = ({edited,edits}) => {

  return (
    <>
    {
      edited.map((edit)=>(
        <Edit key={edit.id} edit={edit} edits={edits}/>
      ))
    }
    
    </>
  )
}

export default Navedit