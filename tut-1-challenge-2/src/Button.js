import React from 'react'

const Button = ({buttonText,reqType,setreqType}) => {
  return (
    <button 
        className={buttonText===reqType?'selected':null}
        type='button'
        onClick={()=>setreqType(buttonText)}    
     >
        {buttonText}
    </button>
  )
}

export default Button