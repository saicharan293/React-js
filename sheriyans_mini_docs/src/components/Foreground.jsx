import React from 'react'
import Card from './Card'

const Foreground = () => {
    const data=[
        {
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mg", 
            close: true, 
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"}
        }
    ]
  return (
    <div className="w-full h-full left-0 top-0 fixed z-[3]">
        {/* <Card /> */}
        {data.map((item,idx)=>(
            <Card />
        ))}
    </div>
  )
}

export default Foreground