import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/PrivateRoute';

const LogIn = () => {

    const { user, logInUser, setUser, signInGoogle, errorMessage, setErrorMessage } = use(AuthContext);


    // const location = useLocation();
    // const navigate = useNavigate();



    window.scrollTo(0, 0);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password } = Object.fromEntries(formData.entries());


        // sign in user with firebase auth
        logInUser(email, password)
            .then((result) => {
                // navigate(location?.state || '/');
                // setUser(result.user);

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
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default LogIn;