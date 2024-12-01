import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] mt-7 rounded">
    <form action="" className="flex flex-wrap w-full  items-start justify-between">
      <div className="w-1/2">
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5 " >Task Title</h3>
        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="make a ui design" />
      </div>
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" />
      </div>
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Employe name" />
      </div>
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design ,dev ,etc." />
      </div>
      </div>
     
      <div className="w-1/2 flex flex-col items-start">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea className="w-full h-44  text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" cols="30" rows="10"></textarea>
      <button className="hover:bg-emerald-600  text-white border-none bg-emerald-500 rounded py-3 px-5 text-sm outline-none  mt-4 w-full ">Create Task</button>
      </div>
     
    </form>
  </div>
  )
}

export default CreateTask