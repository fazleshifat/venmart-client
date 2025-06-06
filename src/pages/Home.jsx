import React from 'react';
import MarqueeBanner from '../components/MarqueeBanner';
import SliderBanner from '../components/SliderBanner';
import CategoryCards from '../components/Category/CategoryCards';

const Home = () => {
    return (
        <>
            <section className="min-h-screen">
                {/* <MarqueeBanner></MarqueeBanner> */}
                <SliderBanner></SliderBanner>
                <CategoryCards></CategoryCards>
            </section>
        </>
    );
};

export default Home;