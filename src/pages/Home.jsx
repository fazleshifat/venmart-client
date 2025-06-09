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

                <Latest></Latest>
                {/* <MarqueeBanner></MarqueeBanner> */}
                <SliderBanner></SliderBanner>
                <CategoryCards></CategoryCards>
            </section>
        </>
    );
};

export default Home;