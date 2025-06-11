import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router';
import HeaderForMobile from '../components/HeaderForMobile';

const MainLayout = () => {
    return (
        <>
            <section className='
            bg-gradient-to-b from-[#F5F5F5] via-[#c3e3ff94] to-[#FFFFFF] 
                dark:bg-gradient-to-b dark:from-[#123b55] dark:via-[#1A3B4D] dark:to-[#2C3E50]'
            >
                <HeaderForMobile></HeaderForMobile>
                <Navbar></Navbar>
                <section className='min-h-screen md:pt-19'>
                    <Outlet></Outlet>
                </section>
                <Footer></Footer>
            </section >
        </>
    );
};

export default MainLayout;