import React from 'react'
import Button from './Button'

const Form = ({reqType,setreqType}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <Button 
            buttonText='users'
            reqType={reqType}
            setreqType={setreqType}
        />
        <Button 
            buttonText='posts'
            reqType={reqType}
            setreqType={setreqType}
        />
        <Button 
            buttonText='comments'
            reqType={reqType}
            setreqType={setreqType}
        />
    </form>
  )
}

export default Form