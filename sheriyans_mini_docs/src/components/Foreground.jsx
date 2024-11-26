import React, { useContext, useRef, useState } from "react";
import Card from "./Card";
import { IoMdAdd } from "react-icons/io";
import ModalForm from "./ModalForm";
import { DataContext } from "../context/ContextApi";

const Foreground = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref= useRef(null)
    const addDoc=()=>{
        setIsOpen(!isOpen)
    }
  
    const {docsList} = useContext(DataContext)
    // console.log(data);

  return (
    <>
        <div className="relative">
            <div className="p-2 cursor-pointer rounded-full bg-zinc-200 text-zinc-700 text-[40px] absolute z-[10] top-5 right-5 " onClick={addDoc}><IoMdAdd /></div>
            <div ref={ref} className="w-full h-full left-0 top-0 fixed z-[3] flex gap-10 flex-wrap md:flex-nowrap  p-5">
                {/* <Card /> */}
                {docsList.map((item, idx) => (
                    <Card key={idx} data={item} reference={ref}/>
                ))}
            </div>
            <ModalForm isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    </>
  );
};

export default Foreground;
