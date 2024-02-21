import {useState} from 'react';

export default function BgChanger(){

     const [bgColor,setBgcolor]=useState('black');    // hooks hai ye useState okay
    
     return (

          <div style={{backgroundColor:bgColor}}className='bg-black w-full h-screen'>
                  <ul className='flex items-center justify-around justify-center flex-wrap flex-grow'>
                      <li><button style={{backgroundColor:"red"}} onClick= {()=>setBgcolor('red')} className='rounded-md px-2 py-2'>Red</button></li>
                      <li><button style={{backgroundColor:"green"}} onClick={ ()=>setBgcolor('green')} className='rounded-md px-2 py-2'>Green</button></li>
                      <li><button style={{backgroundColor:"white"}} onClick={ ()=>setBgcolor('white')} className='rounded-md px-2 py-2'>White</button></li>
                      <li><button style={{backgroundColor:"blue"}} onClick={ ()=>setBgcolor('blue')} className='rounded-md px-2 py-2'>blue</button></li>
                 </ul>
                
          </div>
     )

}