import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";

const tagColors = {
    core: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20",
    popular: "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20",
    premium: "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-500/20",
    new: "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-100 dark:border-green-500/20",
    insight: "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-500/20",
};

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
        <section id="services" className="max-w-[1300px] mx-auto px-4 py-20 space-y-14">
            {/* Section Header */}
            <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-3">What we provide</p>
                <h2 className="text-3xl md:text-4xl section-heading text-gray-800 dark:text-white">
                    Services We <span className="text-gradient">Offer</span>
                </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0;
                    const tagStyle = tagColors[service.tag] || tagColors.core;

                    return (
                        <Fade key={index} direction={isEven ? "left" : "right"} triggerOnce className="overflow-hidden rounded-2xl">
                            <div
                                className={`flex flex-col md:flex-row h-full items-stretch gap-0 bg-white dark:bg-slate-900/60 rounded-2xl border border-gray-100 dark:border-indigo-500/15 overflow-hidden card-hover ${!isEven ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Image */}
                                <div className="w-full md:w-5/12 h-52 md:h-auto">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-7/12 p-6 md:p-7 flex flex-col justify-between">
                                    <div className="space-y-3">
                                        {/* Tag */}
                                        {service.tag && (
                                            <span className={`inline-block text-[10px] font-semibold px-2.5 py-1 rounded-md border ${tagStyle}`}>
                                                {service.tag.toUpperCase()}
                                            </span>
                                        )}

                                        {/* Title */}
                                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                                            <span className="text-lg">{service.icon}</span>
                                            <span>{service.title}</span>
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-1.5 pt-1">
                                            {service.features.slice(0, 4).map((feature, i) => (
                                                <li key={i} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                                    <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        to={service.link}
                                        className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/cta"
                                    >
                                        {service.cta || "Learn More"}
                                        <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
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
