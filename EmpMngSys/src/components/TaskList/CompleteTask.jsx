import React from 'react'

const CompleteTask = () => {
  return (
    <div className='h-full w-[300px] p-5 bg-green-400 rounded-xl flex-shrink-0'>
        <div className='flex justify-between items-center'>
            <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti harum deserunt eius sint sit asperiores.</p>
        <div className="mt-2">
            <button className='w-full'>Complete</button>
        </div>
    </div>
  )
}

export default CompleteTask
