import React from 'react'
import { useState } from 'react'
const Edit = ({edit,edits}) => {
  const id=edit.id
  const[text,setText]=useState(edit.text)
  const[day,setDay]=useState(edit.day)
  const[time,setTime]=useState(edit.time)
  const[reminder,setReminder]=useState(edit.reminder)

  function submit(e){
    e.preventDefault()
    if(!text){
    alert('Please Enter the Title')
  }
  else{
  edits({id,text,day,time,reminder})
  }
  setText('')
  setDay('')
  setTime('')
  setReminder(false)
  
  }
  return (
    <div>
      <form className='add-form' onSubmit={submit}>
        <div className="form-control">
        <input type="text" name="" className="form-control input" 
        value={text} onChange={(e)=>setText(e.target.value)
        } placeholder="Title"/>
      </div>
      <div className="form-control">
      <input type="date" name="" id="" className="form-control input" 
        value={day} onChange={(e)=>setDay(e.target.value)}/>
      </div>
      <div className="form-control">
    <input type="time" name="" id="" className="form-control input" 
        value={time} onChange={(e)=>setTime(e.target.value)}/>
      </div>
      <div className="form-control-check">
        <label htmlFor="checkbox" className='form-control-check label'>Add Reminder</label>
        <input type="checkbox" name="" id="checkbox" checked={reminder} className="form-control-check input" 
        onChange={(e)=>setReminder(e.currentTarget.checked)}/>
      </div>
      <button type="submit" className="btn btn-block">Edit Task</button>
</form>
    </div>
  )
}

export default Edit