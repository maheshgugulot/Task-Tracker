import React from 'react'
import { useState } from 'react'
const Addtask = ({addTask}) => {
  const[text,setText]=useState('')
  const[day,setDay]=useState('')
  const[time,setTime]=useState('')
  const[reminder,setReminder]=useState(false)
  function submit(e){
    e.preventDefault()
    if(!text){
    alert('Please Enter the Title')
  }
  else{
  addTask({text,day,time,reminder})
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

      <button type="submit" className="btn btn-block">Add Task</button>
    </form>
    </div>
  )
  }

export default Addtask