import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import registerAnimation from '../../public/assets/animations/registration.json'
import Lottie from 'lottie-react';
import { useState } from 'react';

const Register = () => {
    window.scroll(0, 0);
    const [load, setLoad] = useState(false);

    const { createUser, setUser, errorMessage, setErrorMessage } = use(AuthContext);

    const Navigate = useNavigate();
    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        setLoad(true);

        const form = e.target;
        const formData = new FormData(form);
        const { email, password, name, photo, ...rest } = Object.fromEntries(formData.entries());

        setErrorMessage('');

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setErrorMessage('Password must include at least one uppercase letter');
            return;
        }
        if (!/[a-z]/.test(password)) {
            setErrorMessage('Password must include at least one lowercase letter');
            return;
        }
        if (photo.length > 1024) {
            setErrorMessage('Photo URL must be less than 1024 characters');
            return;
        }

        createUser(email, password)
            .then(result => {
                const profile = {
                    displayName: name,
                    photoURL: photo
                }

                updateProfile(result.user, profile)
                    .then(() => {
                        setUser(result.user)

                        const userProfile = {
                            email,
                            name,
                            photo,
                            creationTime: result.user?.metadata?.creationTime,
                            lastSignInTime: result.user?.metadata?.lastSignInTime,
                            ...rest
                        }

                        axios.post("https://venmart-server.vercel.app/users", userProfile)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "Account Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            })
                            .catch();

                        Navigate('/');
                    })
                    .catch()
            })
            .catch()
            .finally(() => {
                setLoad(false);
            })
    }

    useEffect(() => {
        document.getElementById("title").innerText = "Register"
    }, [])

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 gap-8 py-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="w-full max-w-md flex-1 rounded-2xl border border-gray-100 dark:border-indigo-500/15 bg-white dark:bg-slate-900/60 p-8 md:p-10">

                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gradient mb-2">Create Account</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Join VenMart today</p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleRegistration} className="space-y-4">
                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white text-sm placeholder-gray-400"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            onChange={() => setErrorMessage(null)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white text-sm placeholder-gray-400"
                            placeholder="https://your-image.jpg"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white text-sm placeholder-gray-400"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={() => setErrorMessage(null)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white text-sm placeholder-gray-400"
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    {errorMessage && (
                        <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-500/10 px-3 py-2 rounded-lg text-xs border border-red-100 dark:border-red-500/20">
                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
                            {errorMessage}
                        </div>
                    )}

                    <button className="btn btn-primary-gradient w-full rounded-xl text-sm font-medium mt-2">
                        {load ? 'Creating account...' : 'Create Account'}
                    </button>
                </form>

                <p className="text-xs text-center mt-6 text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link to="/logIn" className="text-indigo-500 font-medium hover:underline">
                        Sign in
                    </Link>
                </p>
            </motion.div>

            <div className='flex-1 w-2/3 md:max-w-lg'>
                <Lottie animationData={registerAnimation}></Lottie>
            </div>
        </div>
    );
};

export default Register;
