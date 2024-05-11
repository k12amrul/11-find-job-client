import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';
import NavBarr from '../Shared/NavBarr';
// import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=' max-w-6xl mx-auto ' >
            {/* <Navbar></Navbar> */}
            <NavBarr></NavBarr>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;