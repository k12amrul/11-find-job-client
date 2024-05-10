import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=' max-w-6xl mx-auto ' >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;