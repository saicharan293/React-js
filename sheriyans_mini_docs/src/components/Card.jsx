import React from 'react'
import { FaDownload, FaEdit } from 'react-icons/fa'
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
      className="flex-shrink-0 relative lg:w-60 lg:h-72 w-44 h-56 lg:rounded-[45px] rounded-[30px] bg-zinc-900/90 text-white lg:px-8 lg:py-10 px-4 py-6 overflow-hidden  ">
        <FaEdit />
        <p className='text-sm font-normal leading-tight mt-5 lg:font-semibold'>{data.description}</p>
        <div className="footer absolute bottom-0 w-full left-0 ">
            <div className='flex items-center justify-between py-3 lg:px-8 px-6 mb-3'>
                <h5 className='text-sm lg:text-xl'>{data.filesize} </h5>
                <span className='lg:w-7 lg:h-7 w-4 h-4 bg-zinc-600 rounded-full flex items-center justify-center'>
                  {data.close ? <IoClose /> : <LuDownload size=".9em" color='#fff'/>}
                </span>
            </div>
            {
              data.tag.isOpen && 
            (<div className={`tag w-full py-4 sm:py-3 ${data.tag.tagColor=='sky'?"bg-sky-600":"bg-green-600"} flex items-center justify-center`}>
                <h3 className=' cursor-pointer lg:text-sm text-xs font-normal lg:font-semibold flex justify-center items-center gap-2' onClick={handleSaveToFile}>{data.tag.tagTitle} <FaDownload/></h3>
            </div>)
            }
        </div>
    </motion.div>
  )
}

export default Card