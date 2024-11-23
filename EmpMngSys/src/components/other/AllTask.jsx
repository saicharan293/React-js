import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    // console.log(dataContext.employees)
  return (
    <div className='bg-[#1c1c1c] p-[2rem] mt-5 rounded   '>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
        </div>
        <div className='h-[260px] p-2 overflow-y-auto'>
            {userData.map((ele, idx)=>{
                return <div key={idx} className='border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>{ele.firstname}</h2>
                <h3 className='text-lg font-medium w-1/5 text-blue-600'>{ele.taskNumbers.newTask}</h3>
                <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{ele.taskNumbers.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-white'>{ele.taskNumbers.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-600'>{ele.taskNumbers.failed}</h5>
            </div>
            })}
                
        </div>
        
    </div>
  )
}

export default AllTask