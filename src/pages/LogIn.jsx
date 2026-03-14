import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import loginAnimation from '../../public/assets/animations/login.json'
import Lottie from 'lottie-react';
import { useState } from 'react';

const LogIn = () => {
    window.scroll(0, 0)
    const [load, setLoad] = useState(false);

    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    const { user, logInUser, setUser, setLoading, googleLoginUser, errorMessage, setErrorMessage } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    window.scrollTo(0, 0);

    const handleSignIn = (e) => {
        e.preventDefault();
        setLoad(true);

        const form = e.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData.entries());

        logInUser(email, password)
            .then((result) => {
                navigate(location?.state || '/');
                setUser(result.user);

                Swal.fire({
                    icon: "success",
                    title: "Log in success!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                setLoading(false);
            })
            .finally(() => {
                setLoad(false);
            });
    }

    const handleGoogleSignIn = () => {
        googleLoginUser()
            .then((result) => {
                setUser(result.user);
                navigate(location?.state || '/');
            }).catch((error) => {
                setErrorMessage(error.message);
                setLoading(false);
            });
    }

    useEffect(() => {
        document.getElementById("title").innerText = "Login"
    }, [])

    return (
        <div className="min-h-screen flex py-10 flex-col md:flex-row items-center justify-center px-4 gap-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="w-full flex-1 max-w-md rounded-2xl border border-gray-100 dark:border-indigo-500/15 bg-white dark:bg-slate-900/60 p-8 md:p-10">

                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gradient mb-2">Welcome Back</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Sign in to your account</p>
                </div>

                {/* Google Login */}
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-white text-sm font-medium hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:shadow-sm transition-all duration-300 mb-6"
                >
                    <svg
                        aria-label="Google logo"
                        width="18"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <g>
                            <path d="m0 0H512V512H0" fill="#fff"></path>
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                        </g>
                    </svg>
                    Continue with Google
                </button>

                {/* Separator */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex-grow h-px bg-gray-200 dark:bg-slate-700" />
                    <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">or</span>
                    <div className="flex-grow h-px bg-gray-200 dark:bg-slate-700" />
                </div>

                {/* Login Form */}
                <form onSubmit={handleSignIn} className="space-y-4">
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
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white text-sm placeholder-gray-400"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="text-right">
                        <Link className="text-xs text-indigo-500 dark:text-indigo-400 hover:underline font-medium">Forgot password?</Link>
                    </div>

                    <button className="btn btn-primary-gradient w-full rounded-xl text-sm font-medium mt-2">
                        {load ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <p className="text-xs text-center mt-6 text-gray-500 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-indigo-500 font-medium hover:underline">
                        Create one
                    </Link>
                </p>
            </motion.div>

            <div className='flex-1 w-2/3 md:max-w-lg'>
                <Lottie animationData={loginAnimation} loop={true} />
            </div>
        </div>
    );
};

export default LogIn;
