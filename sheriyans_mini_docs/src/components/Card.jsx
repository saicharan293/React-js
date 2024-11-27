import React from 'react'
import { FaDownload, FaRegFileAlt } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { LuDownload } from 'react-icons/lu'
import { motion } from "framer-motion";

const Card = ({data,reference}) => {
  // console.log(data.tag.tagColor)
  const handleSaveToFile = () => {
    const content = data.description; 
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "description.txt"; 
    link.click();
  };
  return (
    <motion.div 
      drag 
      dragConstraints={reference} 
      whileDrag={{scale:1.1}} 
      dragElastic={.5} 
      dragTransition={{bounceStiffness: 100, bounceDamping: 30}}
      className="flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.description}</p>
        <div className="footer absolute bottom-0 w-full left-0 ">
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{data.filesize} </h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                  {data.close ? <IoClose /> : <LuDownload size=".9em" color='#fff'/>}
                </span>
            </div>
            {
              data.tag.isOpen && 
            (<div className={`tag w-full py-4 ${data.tag.tagColor=='sky'?"bg-sky-600":"bg-green-600"} flex items-center justify-center`}>
                <h3 className=' cursor-pointer text-sm font-semibold flex justify-center items-center gap-2' onClick={handleSaveToFile}>{data.tag.tagTitle} <FaDownload/></h3>
            </div>)
            }
        </div>
    </motion.div>
  )
}

export default Card