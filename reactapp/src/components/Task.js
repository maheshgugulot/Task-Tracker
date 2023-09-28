
import React from 'react'
import Tasks from './Tasks'

const Task = ({task,deletetask,toggle,editTask,edited}) => {

  return (
    <>
    {
      task.map((task)=>(
        <Tasks key={task.id} task={task} deletetask={deletetask} toggle={toggle}
        editTask={editTask} edited={edited}/>
      ))
    }
    
    </>
  )
}

export default Task