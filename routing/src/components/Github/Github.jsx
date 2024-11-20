import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  // const [dataArr, setDataArr] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data)
  //     setDataArr(data)
  //   })
  // },[])
  const dataArr=useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{dataArr.followers}
      <img src={dataArr.avatar_url}  width={300} alt="" />
    </div>
  )
}

export default Github


export const githubInfoLoader = async() => {
  const res=await fetch('https://api.github.com/users/hiteshchoudhary')
  return res.json()
}