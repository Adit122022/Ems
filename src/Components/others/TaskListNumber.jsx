import React from 'react'

const TaskListNumber = ({ data }) => {
  const activeTasks = data.tasks.filter(task => task.active).length
  const newTasks = data.tasks.filter(task => task.newTask).length
  const completedTasks = data.tasks.filter(task => task.completed).length
  const failedTasks = data.tasks.filter(task => task.failed).length

  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='px-9 py-6 w-[45%] bg-red-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{activeTasks}</h2>
        <h3 className='text-xl font-medium'>Active Tasks</h3>
      </div>
      <div className='px-9 py-6 w-[45%] bg-blue-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{newTasks}</h2>
        <h3 className='text-xl font-medium'>New Tasks</h3>
      </div>
      <div className='px-9 py-6 w-[45%] bg-green-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{completedTasks}</h2>
        <h3 className='text-xl font-medium'>Completed Tasks</h3>
      </div>
      <div className='px-9 py-6 w-[45%] bg-yellow-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{failedTasks}</h2>
        <h3 className='text-xl font-medium'>Failed Tasks</h3>
      </div>
    </div>
  )
}

export default TaskListNumber   