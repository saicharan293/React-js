import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        <div className=" rounded-xl  w-[45%] bg-red-400 px-9 py-6">
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=" rounded-xl  w-[45%] bg-blue-400 px-9 py-6">
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=" rounded-xl  w-[45%] bg-green-400 px-9 py-6">
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=" rounded-xl  w-[45%] bg-yellow-400 px-9 py-6">
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers