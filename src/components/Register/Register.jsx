import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, name, password);
    }
    return (
        <div className="hero bg-base-200 min-h-screen mx-auto ">
            
             <div className="card-body bg-fuchsia-500 shadow-2xl rounded-3xl text-white">
             <h1 className="text-3xl font-bold">Sign up now!</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label  className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />

                    <label  className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

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