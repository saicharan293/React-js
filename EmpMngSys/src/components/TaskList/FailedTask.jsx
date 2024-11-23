import React from 'react'

const FailedTask = ({data}) => {
  // console.log(data);
  return (
    <div className='h-full w-[300px] p-5 bg-yellow-400 rounded-xl flex-shrink-0'>
        <div className='flex justify-between items-center'>
            <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
        <p className="text-sm mt-2">{data.taskDescription}</p>
        <div className="mt-2">
            <button className='w-full'>Failed</button>
        </div>
    </div>
  )
}

export default FailedTask
