import React from 'react'

const Square = ({colorName,hexValue,isDarkText}) => {
  return (
    <section 
        className="upper-square " 
        style={{
            backgroundColor:colorName,
            color:isDarkText?"#000":"#fff"
            }}>
          <h2>{colorName?colorName:'empty'}</h2>
          <h2>{hexValue?hexValue:null}</h2>
    </section>
  )
}

export default Square