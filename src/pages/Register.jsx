import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import { motion } from "framer-motion";
import { useEffect } from 'react';

const Register = () => {
    window.scroll(0, 0)

    const { createUser, setUser, errorMessage, setErrorMessage } = use(AuthContext);

    const Navigate = useNavigate();
    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);


        const { email, password, name, photo, ...rest } = Object.fromEntries(formData.entries());

        // Clear previous error
        setErrorMessage('');

        // Password validation checks

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
        // Validate photo URL length
        if (photo.length > 1024) {
            setErrorMessage('Photo URL must be less than 1024 characters');
            return;
        }

        // create user on firebase
        createUser(email, password)
            .then(result => {
                const profile = {
                    displayName: name,
                    photoURL: photo
                }


                updateProfile(result.user, profile)
                    .then(() => {


                        setUser(result.user)
                        // navigate('/');

                        const userProfile = {
                            email,
                            name,
                            photo,
                            creationTime: result.user?.metadata?.creationTime,
                            lastSignInTime: result.user?.metadata?.lastSignInTime,
                            ...rest
                        }


                        // Send a POST request
                        axios.post("https://venmart-server.vercel.app/users", userProfile)
                            .then(res => {
                                if (res.data.insertedId) {
                                    // sweet alert after create user
                                    Swal.fire({
                                        icon: "success",
                                        title: "Account Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            })
                            .catch(err => console.error('Axios error:', err));

                        Navigate('/');


                    })
                    .catch(error => {
                        console.log(error.code)
                    })
            })
            .catch(error => {
                console.log(error.code);

            })
    }


    useEffect(() => {
        document.getElementById("title").innerText = "Register"
    }, [])



    return (


        <div className="min-h-screen flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] // smooth cubic-bezier
                }}
                className="w-full max-w-xl rounded-3xl border-2 border-gray-200 dark:border-indigo-300 bg-base-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-10 md:p-12">

                {/* Title */}
                <h1 className="text-4xl font-bold text-center text-[#20b2aa] dark:text-[#7fffd4] mb-8">
                    Register Now
                </h1>

                {/* Registration Form */}
                <form onSubmit={handleRegistration} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input input-bordered w-full rounded-xl"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            onChange={() => setErrorMessage(null)}
                            className="input input-bordered w-full rounded-xl"
                            placeholder="https://your-image.jpg"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input input-bordered w-full rounded-xl"
                            placeholder="Your email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={() => setErrorMessage(null)}
                            className="input input-bordered w-full rounded-xl"
                            placeholder="Your password"
                            required
                        />
                    </div>

                    {/* Forgot & Redirect */}
                    <div className="flex justify-between items-center text-sm">
                        <Link className="link link-hover text-indigo-500 dark:text-indigo-400">Forgot password?</Link>
                    </div>

                    {
                        errorMessage && <p className='text-red-500'>{errorMessage}</p>
                    }

                    <button className="btn btn-primary w-full mt-2 rounded-xl shadow-md hover:shadow-lg transition">
                        Register
                    </button>
                </form>

                {/* Already have account */}
                <p className="text-sm text-center mt-6 text-gray-600 dark:text-zinc-400">
                    Already have an account?{" "}
                    <Link to="/login" className="link link-hover text-indigo-500 font-medium">
                        Login here
                    </Link>
                </p>
            </motion.div>
        </div >



    );
};

export default Register;