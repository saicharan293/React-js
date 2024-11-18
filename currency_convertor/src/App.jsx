import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js'

const App = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('inr')
  const [to, setTo] = useState('usd')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo);

  const currencySwap=()=>{
    setTo(from)
    setFrom(to)
    setConvertedAmount(0)
    setAmount(0)
  }

  const coversion = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div 
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage:`url(https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=600)`}}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e)=>{
              e.preventDefault()
              coversion()
            }}>
              <div className="w-full mb-1">
                <InputBox 
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onDropdownChange={(currency)=>{setFrom(currency)}}
                  onAmountChange={(amt)=>setAmount(amt)}
                  selectedCurrency={from}
                  />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={currencySwap}>Swap</button>
              </div>
              <div className="w-full mb-1">
                <InputBox 
                  label="to"
                  amount={convertedAmount}
                  amountDisabled
                  currencyOptions={options}
                  onDropdownChange={(currency)=>{setTo(currency)}}
                  onAmountChange={(amt)=>setAmount(amt)}
                  selectedCurrency={to}
                  />
              </div>
              <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default App
