import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const services = [
    {
        title: "Custom Manufacturing",
        description:
            "Tailored solutions for large-scale and small-batch production runs across diverse industries.",
        link: "/services/manufacturing",
        image: "/assets/custom-manufacturing.avif",
        span: "col-span-3",
        span2: "col-span-2"
    },
    {
        title: "Equipment Supply",
        description:
            "From safety tools to heavy-duty machinery, we source and deliver with efficiency.",
        link: "/services/equipment",
        image: "/assets/equipmentSupply.jpg",
        span: "col-span-2",

    },
    {
        title: "Logistics Support",
        description:
            "Reliable packaging, transport, and warehouse integration for hassle-free operations.",
        link: "/services/logistics",
        image: "/assets/AfterSalesSupport.webp",
        span: "col-span-2",
    },
    {
        title: "Technical Consultancy",
        description:
            "Our expert engineers provide tailored technical consultation for industrial excellence.",
        link: "/services/consultancy",
        image: "/assets/TechnicalConsultancy.avif",
        span: "col-span-3",
        span2: "col-span-2"
    },
    {
        title: "After-Sales Support",
        description:
            "We’re here post-purchase with maintenance, guidance, and assistance.",
        link: "/services/support",
        image: "/assets/logisticssupport.webp",
        span: "col-span-5",
        span2: "col-span-2"
    },
    // {
    //     title: "On-Site Installation",
    //     description:
    //         "Seamless setup by our professional technicians to minimize downtime.",
    //     link: "/services/installation",
    //     image: "/assets/services/installation.jpg",
    //     span: "col-span-2",
    // },
    // {
    //     title: "Training Programs",
    //     description:
    //         "Equip your team with the knowledge to operate and maintain equipment efficiently.",
    //     link: "/services/training",
    //     image: "/assets/services/training.jpg",
    //     span: "col-span-3",
    // },
    // {
    //     title: "Procurement Planning",
    //     description:
    //         "Let us help you plan, forecast, and optimize procurement cycles.",
    //     link: "/services/procurement",
    //     image: "/assets/services/procurement.jpg",
    //     span: "col-span-5",
    // },
];

const OurServices = () => {
    return (
        <section className="relative py-20 px-6 md:px-16 max-w-[1350px] mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-4xl font-bold text-center mb-14 text-[#20b2aa] dark:text-[#7fffd4]"
            >
                Our Services 🚀
            </motion.h2>

            <div
                className="absolute inset-0 w-full h-full bg-center bg-fixed brightness-[0.4] z-0"
                // style={{ backgroundImage: 'url("/assets/servicesBanner.jpg")' }}
            ></div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-8 auto-rows-fr">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`${service.span} bg-gradient-to-br from-white via-indigo-50 to-indigo-100 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 p-6 rounded-3xl border-2 border-indigo-200 dark:border-indigo-400 shadow-md flex flex-col items-center text-center`}
                    >
                        <div className="w-full h-96 rounded-3xl border-4 border-indigo-300 dark:border-indigo-500 overflow-hidden mb-4">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover    "
                            />
                        </div>

                        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-teal-300 text-transparent bg-clip-text mb-2">
                            {service.title}
                        </h3>

                        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                            {service.description}
                        </p>

                        <Link
                            to={service.link}
                            className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-full text-sm transition"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
