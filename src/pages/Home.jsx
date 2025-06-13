import React from 'react';
import MarqueeBanner from '../components/MarqueeBanner';
import SliderBanner from '../components/SliderBanner';
import CategoryCards from '../components/Category/CategoryCards';
import Latest from '../components/Latest';
import { Link, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import OurServices from '../layouts/OurServices';

const Home = () => {
    window.scroll(0, 0)
    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    return (
        <>
            <section className="min-h-screen">
                {/* <Latest></Latest> */}
                {/* <MarqueeBanner></MarqueeBanner> */}
                <SliderBanner></SliderBanner>
                <CategoryCards></CategoryCards>
                <OurServices></OurServices>
            </section>
        </>
    );
};

export default Home;