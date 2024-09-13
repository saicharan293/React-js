import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch=(dataUrl)=>{
    const [data, setdata] = useState([]);
    const [fetchError, setfetchError] = useState(null);
    const [isLoading, setisLoading] = useState(null);

    useEffect(() => {
      let isMounted=true;
      const source=axios.CancelToken.source();
      const fetchData=async(url)=>{
        setisLoading(true);
        try {
            const response=await axios.get(url,{
                cancelToken: source.token
            });
            if(isMounted) {
                setdata(response.data);
                setfetchError(null);
            }
        } catch (error) {
            if(isMounted){
                setfetchError(error.message);
                setdata([])
            }
        } finally{
            isMounted && setTimeout(()=> setisLoading(false),2000);
        }
      }

      fetchData(dataUrl);

      const cleanup=()=>{
        console.log('clean up function');
        isMounted=false;
        source.cancel();
      }
    
      return cleanup;
    }, [dataUrl])

    return {data,fetchError,isLoading};
    
}

export default useAxiosFetch;