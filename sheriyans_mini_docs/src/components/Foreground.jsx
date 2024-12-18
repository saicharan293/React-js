import React, { useContext, useRef, useState } from "react";
import Card from "./Card";
import { IoMdAdd } from "react-icons/io";
import ModalForm from "./ModalForm";
import { DataContext } from "../context/ContextApi";

const Foreground = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref= useRef(null)
    // const addDoc=()=>{
    //     setIsOpen(!isOpen)
    // }
  
    const {docsList,addDoc,updateDoc} = useContext(DataContext)
    // console.log(updateDoc)

  return (
    <>
        <div className="relative">
            <div className="p-2 cursor-pointer rounded-full lg:bg-zinc-200 bg-zinc-100 text-zinc-700 lg-text-[40px] text-[30px] absolute z-[10] top-5 right-5  " 
            onClick={()=>{
                setIsOpen(true) 
            }}><IoMdAdd /></div>
            <div ref={ref} className="w-full h-full left-0 top-0 fixed z-[3] flex gap-10 flex-wrap lg:flex-col overflow-auto  p-5">
                {/* <Card /> */}
                {docsList.map((item, idx) => (
                    <Card key={idx} id={idx} data={item} reference={ref} updateDoc={updateDoc}/>
                ))}
            </div>
            <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} addDoc={addDoc}/>
        </div>
    </>
  );
};

export default Foreground;
