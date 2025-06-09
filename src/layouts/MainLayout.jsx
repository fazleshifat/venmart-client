import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router';
import HeaderForMobile from '../components/HeaderForMobile';

const MainLayout = () => {
    return (
        <>
            {/* <HeaderForMobile></HeaderForMobile> */}
            <Navbar></Navbar>
            <section className='min-h-screen md:mt-19'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;