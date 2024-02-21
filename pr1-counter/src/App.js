import {useState} from 'react';

/// babel inject the code in index.js by backend
///////// UI updation is handle by the hooks means react methods.
//In React.js, hooks are functions that allow you to use state and other React features without writing a class.
// They were introduced in React 16.8 to enable developers to use stateful logic in functional components, which were previously stateless.    
//let counter = 5;             // UI or parsing me propogate ni ho rha hai
// const inc=()=>{         // ye dono method hooks se handle honge------->useState()
//      counter++; 
//      console.log(counter);
// }

// const dec=()=>{
//     counter--;
//     console.log(counter);
// }

function App() {
  const [apnaCounter,setCount]=useState(5);   // useState is a hooks
  const inc=()=>{

    if(apnaCounter<=19)
        setCount(apnaCounter+1);  
  }
  
  const dec=()=>{
    if(apnaCounter>0)
      setCount(apnaCounter-1);
}

  const reset=()=>{
       setCount(0);
  }
  return (
    <>
      <h1>Counter Project</h1>

      <h1>Value:{apnaCounter}</h1>
      <button onClick={inc}> Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;
