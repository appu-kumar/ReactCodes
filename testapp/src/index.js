import React from 'react';
import ReactDOM from 'react-dom/client';          ///////// virtual dom hai ye
import App from './App';


// iski jagah div likh do or <></>  ye bhi okay hai
//  // jo krna hai App.js me kro isko mt disturb kro
// single tag hi render hota hai okay uske under jitna dalna hai dolo tags
const root = ReactDOM.createRoot(document.getElementById('root'));   // creating virtual dom   means creating div tag and appending some tags that is it.
root.render(                          
  <React.StrictMode>                  
    <App />
  </React.StrictMode>             
);


