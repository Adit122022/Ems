import React from 'react'

const Tasklist = () => {
  return (
    <div id='tasklist' className='overflow-x-auto overflow-y-hidden  h-[55%] flex items-center justify-start gap-5 flex-nowrap rounded-xl py-5 w-full  mt-10'>

        
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
<div className='flex justify-between items-center'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
    <h4 className='text-sm'>20 Feb,2024</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
<p className='text-sm mt-3'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, consectetur earum fuga voluptate labore architecto.</p>
        </div>
    
    
           </div>
  )
}

export default Tasklist