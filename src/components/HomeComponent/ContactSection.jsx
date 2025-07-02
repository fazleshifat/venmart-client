import React from "react";
import contactAnimation from '../../../public/assets/animations/contact.json'
import Lottie from "lottie-react";

const ContactSection = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <section id="contacts" className="relative max-w-[1300px] mx-auto rounded-3xl md:rounded-b-[20%] mb-4 py-16 px-6 md:px-16 border-b-4 border-indigo-200 bg-white dark:bg-zinc-900 shadow-lg">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Left Side - Text Content */}
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-light text-[#065f46] dark:text-white">
                        Contact with us
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                        We’d love to hear from you! Whether you’re curious about products, services,
                        or even partnerships — we’re ready to answer any and all questions.
                    </p>
                    <div className="text-sm space-y-3 text-gray-700 dark:text-gray-400">
                        <p><strong className="font-medium">📍 Address:</strong> 123 Industrial Ave, Cityville</p>
                        <p><strong className="font-medium">📞 Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong className="font-medium">✉️ Email:</strong> contact@venmart.com</p>
                        <p><strong className="font-medium">🕘 Hours:</strong> Mon - Fri, 9AM - 6PM</p>
                    </div>
                </div>

                {/* Animation */}
                <div className="md:absolute left-96 top-10 w-3/6 md:w-1/8 flex justify-center max-w-sm mx-auto">
                    <Lottie animationData={contactAnimation} loop={true} />
                </div>

                {/* Right Side - Contact Form */}
                <div className="md:w-1/2 w-full bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 space-y-6 border dark:border-zinc-700">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1 font-light">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#34d399] outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1 font-light">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#34d399] outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1 font-light">
                                Subject
                            </label>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#34d399] outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1 font-light">
                                Message
                            </label>
                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#34d399] outline-none resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#34d399] hover:bg-[#059669] text-white font-semibold px-6 py-3 rounded-xl transition duration-300 w-full"
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
