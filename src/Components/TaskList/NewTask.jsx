import React from 'react'

const NewTask = ({task,key}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 shadow-lg rounded-xl p-5 flex flex-col justify-between'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>{task.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
    <p className='text-sm mt-3'>{task.description}</p>
           
           <div className='mt-5'>
            <button  className='bg-green-600  text-white text-sm px-4 py-2 rounded-full w-full'>Accept Task</button>
            </div> </div>
  )
}

export default NewTask