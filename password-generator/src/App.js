import { useCallback, useState,useEffect,useRef } from 'react';
import './App.css';

/*
          useCallback: It is used to memoize functions, meaning it returns a memoized version of the provided callback function that only changes if one of the dependencies has changed.
           It is typically used to optimize performance by avoiding unnecessary re-creation of callback functions, especially when passing callbacks to child components.


           useEffect: It is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
            It runs after every render and can be used to manage side effects or perform cleanup tasks. 




*/
function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pass = '';
    if (numberAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += '()~!@#$%^&*-+=|{}[]:;<>,.?/_';
    }
    for (let len = 1; len <= length; len++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [numberAllowed, charAllowed, password])   // inn mese koi bhi variable change hota hai useCallback ek memoized version function ka return karta hi
  useEffect(()=>{                           // load hota hai to ye chlta hai aur bhi hai functionalities iski
     passwordGenerator();
  },[length,numberAllowed,charAllowed])       // inn variables mese kisi me changes honge callback chalega

  let passwordRef=useRef(null);

  const copyPassword=useCallback(()=>{
        passwordRef.current?.select();    // give shine of selected area of text that is it
        window.navigator.clipboard.writeText(password);
  },[password])

  return (


    <div className='bg-gray-500 w-full h-40 mt-10 ml-10 text-center'>

      <h1 className=' text-4xl text-black'>Password Generator</h1>

      <div className='flex justify-center'>
          <label htmlFor='generatedpassword'>GeneratedPassword:</label>
          <input
            value={password}
            id='generatedPassword'
            className='text-black'
            type='text'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassword} className='bg-blue-500'>copy</button>
      </div>
      <div className='flex justify-center'>
        <div className='mr-4'>
          <input
           type='range' 
           value={length}
           min={6}
           max={25}
           onChange={(e)=>{setLength(e.target.value)}}
            />
           <label>Length:{length}</label> 
        </div>
        <div className='mr-4'>
          <lable htmlFor='numbers'>Numbers:</lable>
          <input
           type='checkbox' 
           id='numbers' 
           defaultChecked={numberAllowed}
           onChange={()=>setNumberAllowed((prev)=>!prev)}
           />
        </div>
        <div className='mr-4'>
          <lable htmlFor='char'>Characters:</lable>
          <input
           type='checkbox'
            id='char'
            defaultChecked={charAllowed}
            onChange={()=>setcharAllowed((prev)=>!prev)}
             />
        </div>
      </div>

    </div>
  );
}

export default App;
