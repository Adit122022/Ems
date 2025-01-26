import React from "react";

const CreateTask = () => {
  return (
    <div className="p-10 bg-gray-900 mt-7 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-100 mb-6">Create New Task</h2>
      <form action="" className="flex  w-full gap-8 items-end">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block" htmlFor="taskTitle">
              Task Title
            </label>
            <input
              id="taskTitle"
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-emerald-500 transition"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block" htmlFor="date">
              Date
            </label>
            <input
              id="date"
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-emerald-500 transition"
              type="date"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block" htmlFor="assignTo">
              Assign To
            </label>
            <input
              id="assignTo"
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-emerald-500 transition"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block" htmlFor="category">
              Category
            </label>
            <input
              id="category"
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-emerald-500 transition"
              type="text"
              placeholder="Design, Development, etc."
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="w-full h-44 text-sm py-2 px-3 rounded-lg outline-none bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-emerald-500 transition"
              placeholder="Provide a detailed task description"
            ></textarea>
          </div>
          <button
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-3 px-5 text-sm font-medium transition"
            type="submit"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
