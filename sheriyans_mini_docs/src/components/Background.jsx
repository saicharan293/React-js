import React from 'react'

const Background = () => {
  return (
    <>
    <div className="w-full h-screen fixed z-[2]">
        <div className="w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold absolute top-[5%]">Documents</div>
        <h1 className='text-[15vw] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900'>Docs.</h1>
    </div>
    </>
  )
}

export default Background