import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from './components/Home/Home.js';
import About from './components/about/About.js'
import Contact from './components/contact/Contact.js'
import User from './components/User/User.js'
import Github from './components/Github/Github.js'

//////////////////////////// first way of routing
// const router=createBrowserRouter([{
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//          path:'',
//          element:<Home />
//       },
//       {
//          path:'/about',
//          element:<About />
//       },
//       {
//         path:'/contact' ,
//         element:<Contact />
//       }
//     ]
// }])

/////////////////////// second way of routing

const router=createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<Layout />}>
         <Route path='/' element={<Home/>}></Route>
         <Route path='about' element={<About/>}></Route>
         <Route path='contact' element={<Contact/>}></Route>
         <Route path='User/:userId' element={<User/>}></Route>
         <Route path='github' element={<Github/>}></Route>
       </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
   <RouterProvider  router={router} />                        {/* ye ek attribute leta hai        */}
  </React.StrictMode>
);


