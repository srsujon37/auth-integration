import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase.init';

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, name, password);

        // create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen mx-auto ">
            
             <div className="card-body bg-fuchsia-500 shadow-2xl rounded-3xl">
             <h1 className="text-3xl font-bold">Sign up now!</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label  className="label text-xl">Name</label>
                    <input type="text" name='name' className="input text-xl" placeholder="Name" />

                    <label  className="label text-xl">Email</label>
                    <input type="email" name='email' className="input text-xl" placeholder="Email" />

                    <label className="label text-xl">Password</label>
                    <input type="password" name='password' className="input text-xl" placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn btn-neutral mt-4">Login</button>
                </form>

                {/* <p>New to this site Please <Link className='text-blue-500' to="/register">Register</Link></p> */}
                <p><span className='text-black'>Already have an account</span>  <Link className='text-white-500' to="/login">Login</Link></p>
           </div>
      </div>
    );
};

export default Register;