
import Header from './Header/Header.js';
import Footer from './footer/Footer.js';

import {Outlet} from 'react-router-dom';

export default function Layout(){
     
    return(
         <>
             <Header />
             <Outlet />         {/* Header and footer ko stick kr deta hai    ye area change hota rhega*/}
             <Footer />
         </>
    )
}