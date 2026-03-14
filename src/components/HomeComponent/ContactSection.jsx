import React from "react";
import contactAnimation from '../../../public/assets/animations/contact.json'
import Lottie from "lottie-react";

const ContactSection = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <section id="contacts" className="relative max-w-[1300px] mx-auto rounded-3xl my-8 py-20 px-6 md:px-16 bg-white dark:bg-slate-900/60 border border-gray-100 dark:border-indigo-500/15 backdrop-blur-sm">
            {/* Section Header */}
            <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-3">Get in touch</p>
                <h2 className="text-3xl md:text-4xl section-heading text-gray-800 dark:text-white">
                    Contact <span className="text-gradient">With Us</span>
                </h2>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-start gap-12">

                {/* Left Side - Contact Info */}
                <div className="md:w-1/2 space-y-6">
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        We'd love to hear from you! Whether you're curious about products, services,
                        or partnerships — we're ready to answer any questions.
                    </p>

                    <div className="space-y-4">
                        {[
                            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>, label: "Address", value: "123 Industrial Ave, Cityville" },
                            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>, label: "Phone", value: "+1 (555) 123-4567" },
                            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>, label: "Email", value: "contact@venmart.com" },
                            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>, label: "Hours", value: "Mon - Fri, 9AM - 6PM" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-indigo-500 dark:text-indigo-400 flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium">{item.label}</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lottie Animation */}
                    <div className="hidden md:block max-w-[200px] mx-auto pt-4 opacity-80">
                        <Lottie animationData={contactAnimation} loop={true} />
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="md:w-1/2 w-full bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-7 md:p-8 space-y-5 border border-gray-100 dark:border-indigo-500/15">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 font-medium uppercase tracking-wider">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-800 dark:text-white placeholder-gray-400 text-sm transition-all duration-200"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 font-medium uppercase tracking-wider">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-800 dark:text-white placeholder-gray-400 text-sm transition-all duration-200"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 font-medium uppercase tracking-wider">
                                Subject
                            </label>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-800 dark:text-white placeholder-gray-400 text-sm transition-all duration-200"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 font-medium uppercase tracking-wider">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-800 dark:text-white placeholder-gray-400 text-sm transition-all duration-200 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary-gradient w-full rounded-xl text-sm font-medium"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
