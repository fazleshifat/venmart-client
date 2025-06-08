import React from 'react';
import MarqueeBanner from '../components/MarqueeBanner';
import SliderBanner from '../components/SliderBanner';
import CategoryCards from '../components/Category/CategoryCards';
import Latest from '../components/Latest';
import { Link } from 'react-router';

const Home = () => {
    return (
        <>
            <section className="min-h-screen">
                <Link className='flex md:hidden justify-center items-center gap-4'>
                    <div className='flex items-center'>
                        <img src="/assets/logo.png" className='w-10' alt="logo" />
                        <p className="text-xl font-bold -ml-3 flex">enmart</p>
                    </div>
                    
                </Link>
                <Latest></Latest>
                {/* <MarqueeBanner></MarqueeBanner> */}
                <SliderBanner></SliderBanner>
                <CategoryCards></CategoryCards>
            </section>
        </>
    );
};

export default Home;