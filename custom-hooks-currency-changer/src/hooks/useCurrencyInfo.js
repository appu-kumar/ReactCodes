
import {useEffect,useState} from 'react'

export default function useCurrencyInfo(currencyType)
{
       const [data,setData]=useState({});
       useEffect(()=>{

            fetch(`https://open.er-api.com/v6/latest/${currencyType}`)
            .then((res)=>res.json())
            .then((res)=>setData(res["rates"]))
       },[currencyType])

       return data;
}

