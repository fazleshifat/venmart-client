import React from "react";
import Marquee from "react-fast-marquee";

const partners = [
    {
        name: "Bashundhara Group",
        image: "/assets/partner/basundhara.png",
        link: "https://bashundhara.com/",
    },
    {
        name: "Aarong",
        image: "/assets/partner/aaarong.png",
        link: "https://aarong.com/",
    },
    {
        name: "Grameenphone",
        image: "/assets/partner/grameenphone.png",
        link: "https://www.grameenphone.com/",
    },
    {
        name: "Incepta",
        image: "/assets/partner/incepta.png",
        link: "https://inceptapharma.com/",
    },
    {
        name: "Lotto",
        image: "/assets/partner/lotto.webp",
        link: "https://www.lottobd.com/",
    },
    {
        name: "PRAN-RFL",
        image: "/assets/partner/pran.webp",
        link: "https://pranrflgroup.com/",
    },
];

export default function OurPartner() {
    return (<>

        {/* <div className="sticky mt-20 -top-50 w-[1300px] bg-base-100 rounded-t-[90%] z-10 mx-auto h-96"></div> */}
        <section id="partners" className="relative max-w-[1300px] border-t border-indigo-100 dark:border-indigo-500/20 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-3xl md:rounded-t-[30%] z-10 mx-auto mt-10 px-4 py-20">

            {/* <div className="absolute inset-0 bg-black/75 bg-opacity-60 z-0" /> */}
            <div className="relative text-center space-y-10">
                <h2 className="text-2xl md:text-4xl font-light text-center mb-12 text-gray-800 dark:text-white">
                    Our Trusted <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Partners</span>
                </h2>

                <p className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
                    We’re proud to collaborate with some of the most respected names in Bangladesh’s industrial, telecom, pharma, and retail sectors.
                </p>
            </div>

            {/* Marquee Track */}
            <div className="overflow-hidden">
                <Marquee pauseOnHover speed={40}>
                    <div className="flex gap-10 items-center h-70">
                        {partners.map((partner, index) => (
                            <a
                                key={index}
                                href={partner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group w-40 md:w-48 md:h-38 flex items-center justify-center bg-white dark:bg-zinc-800/80 border border-gray-100 dark:border-indigo-500/20 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            >
                                {/* Partner Image */}
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="w-full h-full object-contain p-3 transition duration-300"
                                />

                                {/* Tooltip */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs px-4 py-1.5 rounded-full shadow-lg shadow-indigo-500/25 z-10 whitespace-nowrap">
                                    {partner.name}
                                </div>
                            </a>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    </>
    );
}
