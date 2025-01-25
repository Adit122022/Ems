import React from 'react'

const NewTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>20 Feb,2024</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
    <p className='text-sm mt-3'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, consectetur earum fuga voluptate labore architecto.</p>
           
           <div className='mt-5 flex justify-between items-center gap-3'>
            <button  className='bg-green-600 text-sm px-3 py-1 rounded'>Mark As Completed</button>
            <button className='bg-red-600 text-sm px-3 py-1 rounded'>Mark As Failed</button>
            </div> </div>
  )
}

export default NewTask