import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <section className='min-h-screen'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;