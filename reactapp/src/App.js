import { useState,useEffect } from 'react'
import axios from 'axios'
import Head from "./components/Head"
import Navedit from './components/Navedit'
import Task from "./components/Task"
import Addtask from "./components/Addtask"

const App=()=>{
  const[add,addTask]=useState(false)
  const[edit,editTask]=useState([])
  const[task,setTask]=useState([])
  
  useEffect(()=>{
    const getTask=async()=>{
      const taskfromserver=await fetchTasks()
      setTask(taskfromserver)
    }
  getTask()
},[]
  )

  const fetchTasks=async() => {
    const res=await fetch('http://localhost:5000/')
    const data=await res.json()
    return data
  }
  const fetchTask=async(id) => {
    const res=await fetch(`http://localhost:5000/${id}/`)
    const data=await res.json()
    return data
  }
  
  async function deletetask(id){
    try {
      await axios.delete(`http://localhost:5000/${id}/`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
    setTask(task.filter((task)=>task.id!==id))
  }
  async function toggle(id){
    const taskToToggle=await fetchTask(id)
    const updateTask={...taskToToggle,reminder:!taskToToggle.reminder}

    const res=await fetch(`http://localhost:5000/${id}/`,
    {
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },body:JSON.stringify(updateTask),
    }
    )
    const data=await res.json()
    console.log(data)

    setTask(task.map((task)=>task.id===id?{
      ...task,reminder:!task.reminder}:task
    ))
  }
  function show(b){
    addTask(!b)
  }
  async function addtask(ntask) {
    const res=await fetch(`http://localhost:5000/`,{
      method:'POST',
      headers:{'Content-type':'application/json'
    }, body : JSON.stringify(ntask),}
    )

    const data= await res.json()
    setTask([...task,data])
    // const id=Math.floor(Math.random()*10000)+1
    // const newTask={id,...ntask}
    // setTask([...task,newTask])
  }
  
  async function edits(ntask){
    editTask([])
    const res=await fetch('http://localhost:5000/',{
      method:'POST',
      headers:{'Content-type':'application/json'
    }, body : JSON.stringify(ntask),}
    )

    const data= await res.json()
    setTask([...task,data])
  }
  function edittask(id){
    const  toedit=task.filter((task)=>task.id===id)
    editTask(toedit)  
    deletetask(id)
  }
  return(
    <div className="container">
      <Head title="Task-Tracker" show={show} add={add} />
      {add?<Addtask addTask={addtask}/>:''}
      {edit.length?<Navedit edited={edit} edits={edits}/>:''}
      {task.length>0?(<Task task={task} edited={edit} editTask={edittask} deletetask={deletetask}
      toggle={toggle}
      />):(<p>NO TASKS</p>)}
    </div>
  )
}

export default App;
