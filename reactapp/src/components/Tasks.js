import {FaTimes} from 'react-icons/fa'
import Button from './Button'
const Tasks = ({task,deletetask,toggle,editTask,edited}) => {
  return (
    <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>toggle(task.id)}>
      <div className='division-task' style={{userSelect:'none'}}>
      <div ><h3>{task.text}</h3> </div>
      <div className='edit'>
      {edited.length?'':(<Button  text={'Edit'} onclick={()=>editTask(task.id)}/>)}
      <FaTimes style={{color:'red',cursor:'pointer'}}
      onClick={()=>deletetask(task.id)}
      />
      </div>
        </div> 
      <p style={{userSelect:'none'}}>{task.day} at {task.time}</p>
    </div>
  )
}
export default Tasks