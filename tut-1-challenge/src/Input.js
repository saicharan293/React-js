import React from 'react'
import colorNames from 'colornames';

export const Input = ({colorName,setcolorName,sethexValue,isDarkText,setisDarkText}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
          <section className="lower-square">
            <input 
                autoFocus 
                className='color-input' 
                type="text" 
                placeholder='Add Color name' 
                value={colorName}
                onChange={(e)=>{
                    setcolorName(e.target.value);
                    sethexValue(colorNames(e.target.value));
                }}
              />
          </section>
          <button
            type='button'
            onClick={()=>setisDarkText(!isDarkText)}
            >Toggle Text Color</button>
        </form>
  )
}
