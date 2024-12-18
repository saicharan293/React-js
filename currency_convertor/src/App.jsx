import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js'

const App = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
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
      style={{backgroundImage:`url(https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxjdXJyZW5jeSUyMGV4Y2hhbmdlfGVufDB8fDB8fHww)`}}
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
                  amount={amount.toFixed(2)}
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
                  amount={convertedAmount.toFixed(2)}
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
