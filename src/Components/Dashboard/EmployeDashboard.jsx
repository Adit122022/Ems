import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import Tasklist from '../TaskList/tasklist'


const EmployeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
       <Header data={data}/>
       <TaskListNumber data={data}/>
      <Tasklist data={data}/>
        </div>
  )
}

export default EmployeDashboard