import { data } from "autoprefixer";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [datas, setDatas] = useState({})
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then(res=>res.json())
      .then(data=>setDatas(data[currency]))

    }, [currency])
    console.log(datas)
    return datas
    
}

export default useCurrencyInfo;