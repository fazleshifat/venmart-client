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
    return (
        <section id="partners" className="relative max-w-[1300px] mx-auto mt-16 px-4 py-20">
            {/* Decorative top divider */}
            <div className="section-divider max-w-md mx-auto mb-16" />

            <div className="text-center space-y-4 mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">Trusted by industry leaders</p>
                <h2 className="text-3xl md:text-4xl section-heading text-gray-800 dark:text-white">
                    Our Trusted <span className="text-gradient">Partners</span>
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
                    Collaborating with respected names in Bangladesh's industrial, telecom, pharma, and retail sectors.
                </p>
            </div>

            {/* Marquee Track */}
            <div className="overflow-hidden py-6">
                <Marquee pauseOnHover speed={35} gradient gradientColor="transparent" gradientWidth={80}>
                    <div className="flex gap-8 items-center px-4">
                        {partners.map((partner, index) => (
                            <a
                                key={index}
                                href={partner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group w-44 h-28 flex items-center justify-center bg-white dark:bg-slate-900/60 border border-gray-100 dark:border-indigo-500/15 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 hover:border-indigo-200 dark:hover:border-indigo-500/30"
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="w-full h-full object-contain p-4 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                                />

                                {/* Tooltip */}
                                <div className="absolute -top-9 left-1/2 -translate-x-1/2 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-900 dark:bg-slate-800 text-white text-[10px] px-3 py-1.5 rounded-lg shadow-lg z-10 whitespace-nowrap font-medium">
                                    {partner.name}
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-slate-800 rotate-45" />
                                </div>
                            </a>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
