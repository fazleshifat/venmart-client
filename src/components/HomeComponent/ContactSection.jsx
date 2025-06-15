import React from "react";

const ContactSection = () => {
    return (
        <section className="  max-w-[1450px] mx-auto rounded-3xl my-5 py-20 px-6 md:px-16">
            <div className="max-w-7xl  mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left Side - Info */}
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-extrabold text-[#065f46] dark:text-white">
                        Contact with us
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        We’d love to hear from you! Whether you’re curious about products,
                        services, or even partnerships — we’re ready to answer any and all
                        questions.
                    </p>
                    <div className="text-gray-600 space-y-4">
                        <p>
                            <strong>📍 Address:</strong> 123 Industrial Ave, Cityville
                        </p>
                        <p>
                            <strong>📞 Phone:</strong> +1 (555) 123-4567
                        </p>
                        <p>
                            <strong>✉️ Email:</strong> contact@venmart.com
                        </p>
                        <p>
                            <strong>🕘 Hours:</strong> Mon - Fri, 9AM - 6PM
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2 bg-white rounded-2xl shadow-xl p-8 space-y-6">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#34d399] outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#34d399] outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#34d399] outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#34d399] outline-none resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#34d399] hover:bg-[#059669] text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
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
