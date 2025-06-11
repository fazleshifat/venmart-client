import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import { GoogleAuthProvider } from 'firebase/auth';

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
        <div className="bg-base-200 min-h-screen flex items-center justify-center">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl max-w-xl p-8">
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                <div className="card-body">
                    <form onSubmit={handleSignIn}>
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input w-full" placeholder="Password" />
                        <div><Link className="link link-hover">Forgot password?</Link></div>
                        <div>Don't have any account<Link to='/register' className="link link-hover">Registration</Link></div>
                        <button className="btn btn-primary mt-4 w-full">Login</button>
                    </form>
                    {/* Google */}
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>

    );
};

export default LogIn;