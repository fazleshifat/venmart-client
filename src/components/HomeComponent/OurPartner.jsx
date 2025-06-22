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
        <section className="relative max-w-[1300px] border-t-4 border-indigo-200 bg-base-100 rounded-3xl md:rounded-t-[30%] z-10 mx-auto mt-10 px-4 py-20">

            {/* <div className="absolute inset-0 bg-black/75 bg-opacity-60 z-0" /> */}
            <div className="relative text-center space-y-10">
                <h2 className="text-2xl md:text-4xl text-center mb-12 text-gray-500 dark:text-white">
                    Our Trusted Partner<span className="font-extrabold text-yellow-500">|</span>
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
                                className="relative group w-40 md:w-48 md:h-38 flex items-center justify-center bg-white dark:bg-zinc-800 border border-indigo-100 dark:border-zinc-700 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105"
                            >
                                {/* Partner Image */}
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="w-full h-full object-contain p-3 transition duration-300"
                                />

                                {/* Tooltip */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all bg-indigo-600 text-white text-xs px-3 py-1 rounded shadow-lg z-10 whitespace-nowrap">
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
