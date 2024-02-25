
import {useEffect,useState} from 'react'
export default function Github()
{ 
      const token='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';
      const [data,setData] =useState({});
       useEffect(()=>{
              fetch('https://api.github.com/appu-kumar',{
                headers: {
                  Authorization: `token ${token}`
                }
              })
              .then((res)=>res.json())
              .then((res)=>setData(res))
       },[])
   const keys=Object.keys(data);
        return(
             <>
                  {keys.map((e)=>(<h1>{e}</h1>))}
             </>
        )
}