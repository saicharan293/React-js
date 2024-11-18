import React, { useId } from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onDropdownChange,
    currencyOptions=[],
    selectedCurrency='inr',
    amountDisabled=false,
    dropdownDisabled=false,
    className=''
}) => {
    const id=useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
        <input 
            id={id}
            type="number"
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select name="" id="" className="rounded-lg px-1 py-1  bg-gray-100 cursor-pointer outline-none"
        value={selectedCurrency}
        onChange={(e)=>{
            onDropdownChange && onDropdownChange(e.target.value) 
        }}
        disabled={dropdownDisabled}
        >
            {
                currencyOptions.map((cur)=>(
                    <option value={cur} key={cur}>{cur}</option>
                ))
            }
        </select>
      </div>
    </div>
  )
}

export default InputBox
