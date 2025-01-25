import React from 'react'
import AcceptTask from './AcceptTask'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className='overflow-x-auto overflow-y-hidden  h-[55%] flex items-center justify-start gap-5 flex-nowrap rounded-xl py-5 w-full  mt-10'>

        
     <AcceptTask/>
       </div>
  )
}

export default Tasklist