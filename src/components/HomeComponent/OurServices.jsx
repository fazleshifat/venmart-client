import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";

const services = [
    {
        title: "Product Catalog Management",
        description:
            "Bulk upload, smart categories, and real-time stock updates to manage your storefront effortlessly.",
        link: "/services/catalog-management",
        image: "https://www.shipbob.com/wp-content/uploads/2021/06/catalog-management.jpg?w=1024",
        icon: "🛒",
        tag: "core",
        cta: "Manage Products",
        features: [
            "Bulk CSV upload",
            "Real-time stock sync",
            "Smart categorization",
            "Variant & attribute support",
            "Scheduled product launch"
        ]
    },
    {
        title: "Secure Payment Gateways",
        description:
            "Integrate Stripe, SSLCommerz, bKash, and more — with multi-currency, fraud checks, and smooth checkout.",
        link: "/services/payment-integration",
        image: "https://www.gettrx.com/wp-content/uploads/2023/01/7-things-to-consider-before-choosing-a-payment-gateway.png",
        icon: "💰",
        tag: "popular",
        cta: "Enable Payments",
        features: [
            "Stripe, bKash, PayPal, SSLCommerz",
            "Multi-currency support",
            "Transaction logging",
            "Instant refunds",
            "Fraud scoring integration"
        ]
    },
    {
        title: "Smart Inventory & Order Flow",
        description:
            "Track orders live, automate inventory sync, receive alerts on low stock and automate fulfillment.",
        link: "/services/order-inventory",
        image: "https://www.netsuite.com/portal/assets/img/business-articles/inventory-management/infographic-vendor-managed-inventory.jpg?v2",
        icon: "📊",
        tag: "core",
        cta: "Optimize Orders",
        features: [
            "QR-coded order tracking",
            "Auto low-stock alerts",
            "Warehouse integrations",
            "Backorder control",
            "Multi-warehouse management"
        ]
    },
    {
        title: "Live Support & Helpdesk",
        description:
            "Integrate WhatsApp, Messenger, live chat and ticket systems to enhance customer service.",
        link: "/services/customer-support",
        image: "https://www.liveagent.com/wp/urlslab-download/4d8718b892f2473f5029471045dcbd5e/front_call_center.png",
        icon: "📞",
        tag: "premium",
        cta: "Add Support Channels",
        features: [
            "Live chat widget",
            "Ticketing system",
            "Email sync",
            "Chatbot integration",
            "Support SLA tracking"
        ]
    },
    {
        title: "Marketing Automation & SEO",
        description:
            "Boost visibility with built-in SEO tools, product promotions, abandoned cart emails, and remarketing.",
        link: "/services/marketing-seo",
        image: "https://www.seosamba.com/media/Turnkey-Marketing-Automation-and-CRM-Software/original/automate-on-site-seo.png",
        icon: "📢",
        tag: "new",
        cta: "Boost Marketing",
        features: [
            "Meta + OpenGraph editing",
            "Discount engine",
            "Facebook Pixel & GA4",
            "Cart abandonment emails",
            "Coupon code system"
        ]
    },
    {
        title: "Sales Analytics & Insights",
        description:
            "Make informed decisions with real-time dashboards, customer behavior tracking, and sales performance reports.",
        link: "/services/analytics-reporting",
        image: "https://www.hubspot.com/hubfs/sales-analytics.webp",
        icon: "📈",
        tag: "insight",
        cta: "View Reports",
        features: [
            "Live sales dashboards",
            "Top-selling product charts",
            "Customer journey tracking",
            "Heatmaps & session replays",
            "Exportable CSV & PDF reports"
        ]
    }
];

const OurServices = () => {
    return (
        <section id="services" className="max-w-[1290px] mx-auto px-4 py-12 space-y-16">
            <h2 className="text-2xl md:text-4xl text-center mb-12 text-[#20b2aa] dark:text-[#7fffd4]">
                Services We Offer<span className="font-extrabold text-yellow-500">|</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-7 overflow-x-hidden">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <Fade key={index} direction={isEven ? "left" : "right"} className="overflow-x-hidden rounded-3xl">
                            <div
                                className={`overflow-x-hidden flex flex-col md:flex-row h-full items-center justify-center gap-4 md:gap-6 bg-gradient-to-br from-purple-200 via-white to-indigo-100 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 rounded-3xl border border-indigo-200 dark:border-indigo-500 shadow-lg p-4 md:p-10 ${!isEven ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Image */}
                                <div className="w-full md:w-1/2 h-52 md:h-full rounded-2xl">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full object-cover mx-auto rounded-2xl"
                                    />
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
                                    {/* Tag */}
                                    {service.tag && (
                                        <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-[10px] md:text-xs font-semibold px-2 py-1 md:px-3 md:py-1 rounded-full shadow-sm">
                                            {service.tag.toUpperCase()}
                                        </span>
                                    )}

                                    {/* Title */}
                                    <h3 className="text-md md:text-2xl font-bold text-[#1b827d] flex items-center justify-center md:justify-start gap-2">
                                        <span className="text-lg md:text-xl">{service.icon}</span>
                                        <span>{service.title}</span>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="text-left text-xs md:text-sm text-zinc-600 dark:text-zinc-300 list-disc list-inside space-y-1 md:space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Link
                                        to={service.link}
                                        className="inline-block mt-3 md:mt-4 bg-indigo-500 text-white px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium hover:bg-indigo-600 transition"
                                    >
                                        {service.cta || "Learn More"}
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    );
                })}
            </div>
        </section>
    );
};

export default OurServices;
