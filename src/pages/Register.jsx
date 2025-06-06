import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/PrivateRoute';
import axios from 'axios';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser, setUser, errorMessage, setErrorMessage } = use(AuthContext);

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);


        const { email, password, name, photo, ...rest } = Object.fromEntries(formData.entries());

        // create user on firebase
        createUser(email, password)
            .then(result => {
                const profile = {
                    displayName: name,
                    photoURL: photo
                }


                updateProfile(result.user, profile)
                    .then(() => {


                        console.log(result.user)
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
                        axios.post("http://localhost:3000/users", userProfile)
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

                        // update user at a time to update info at navbar


                    })
                    .catch(error => {
                        console.log(error.code)
                    })
            })
            .catch(error => {
                console.log(error.code);

            })
    }
    return (
        <div className="bg-base-200 min-h-screen flex items-center justify-center">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl max-w-xl p-8">
                <h1 className="text-5xl font-bold text-center">Registration now!</h1>
                <div className="card-body">
                    <form className="fieldset" onSubmit={handleRegistration}>
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input w-full" placeholder="your name" />
                        <label className="label">Photo URl</label>
                        <input type="text" name="photo" className="input w-full" placeholder="your photo url" />
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input w-full" placeholder="your email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input w-full" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Registration</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;