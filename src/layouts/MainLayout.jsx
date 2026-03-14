import React from 'react';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router';
import HeaderForMobile from '../components/HeaderForMobile';
import Navbar from '../shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <>
            <section className='min-h-screen
            bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#f1f5f9]
                dark:bg-gradient-to-br dark:from-[#0f172a] dark:via-[#1e1b4b] dark:to-[#0f172a]'
            >
                <HeaderForMobile></HeaderForMobile>
                <Navbar></Navbar>
                <section className='min-h-screen md:pt-20'>
                    <Outlet></Outlet>
                </section>
                <Footer></Footer>
            </section >
        </>
    );
};

export default MainLayout;
