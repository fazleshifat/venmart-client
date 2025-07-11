import React, { useEffect } from 'react';
import MarqueeBanner from '../components/MarqueeBanner';
import SliderBanner from '../components/SliderBanner';
import { Link, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import CategoryCards from '../components/HomeComponent/CategoryCards';
import IndustryWeServe from '../components/HomeComponent/IndustryWeServe';
import ContactSection from '../components/HomeComponent/ContactSection';
import OurPartners from '../components/HomeComponent/OurPartner';
import OurServices from '../components/HomeComponent/OurServices';
import ServiceRecord from '../components/HomeComponent/ServiceRecord';

const Home = () => {
    window.scroll(0, 0)
    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    useEffect(() => {
        document.getElementById("title").innerText = "Venmart"
    }, [])

    return (
        <>
            <section className="min-h-screen">
                {/* <Latest></Latest> */}
                {/* <MarqueeBanner></MarqueeBanner> */}
                <SliderBanner></SliderBanner>
                <CategoryCards></CategoryCards>
                <OurServices></OurServices>
                {/* <IndustryWeServe></IndustryWeServe> */}
                <OurPartners></OurPartners>
                <ServiceRecord></ServiceRecord>
                <ContactSection></ContactSection>
            </section>
        </>
    );
};

export default Home;