import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import { GoogleAuthProvider } from 'firebase/auth';
import { Fade } from 'react-awesome-reveal';

const LogIn = () => {
    window.scroll(0, 0)

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
        const form = e.target;
        const formData = new FormData(form);

        const { email, password } = Object.fromEntries(formData.entries());


        // sign in user with firebase auth
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
                // setErrorMessage(error.code);
                setLoading(false);
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
    return (

        <Fade cascade damping={0.5}>

            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="w-full max-w-xl rounded-3xl border-2 border-gray-200 dark:border-indigo-300 bg-base-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-10 md:p-12">
                    {/* Title */}
                    <h1 className="text-4xl font-bold text-center text-[#20b2aa] dark:text-[#7fffd4] mb-3">Login</h1>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn bg-white text-black border border-gray-300 w-full flex items-center justify-center gap-2 rounded-xl mb-5 hover:shadow-md transition"
                    >
                        <svg
                            aria-label="Google logo"
                            width="20"
                            height="20"
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
                    <div className="flex items-center gap-4 mb-8">
                        <hr className="flex-grow border-gray-300 dark:border-zinc-600" />
                        <span className="text-sm text-gray-500 dark:text-zinc-400">or</span>
                        <hr className="flex-grow border-gray-300 dark:border-zinc-600" />
                    </div>


                    {/* Login Form */}
                    <form onSubmit={handleSignIn} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full rounded-xl"
                                placeholder="enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered w-full rounded-xl"
                                placeholder="enter your password"
                                required
                            />
                        </div>

                        <div className="text-right">
                            <Link className="link link-hover text-sm text-indigo-500 dark:text-indigo-400">Forgot password?</Link>
                        </div>

                        <button className="btn btn-primary w-full mt-2 rounded-xl shadow-md hover:shadow-lg transition">
                            Login
                        </button>
                    </form>

                    {/* Register Prompt */}
                    <p className="text-sm text-center mt-6 text-gray-600 dark:text-zinc-400">
                        Don't have an account?{" "}
                        <Link to="/register" className="link link-hover text-indigo-500 font-medium">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>

        </Fade>

    );
};

export default LogIn;