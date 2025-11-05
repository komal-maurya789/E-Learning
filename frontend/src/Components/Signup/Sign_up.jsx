import React, { useState } from 'react';
import './sign_up.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState();  
    const [email, setEmail] = useState();  
    const [password, setPassword] = useState();  
    const [confirmpasword, setConfirmPassword] = useState();  
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Student', { name, email, password, confirmpasword })
        .then(result => {console.log(result)
            navigate('/Login')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <section className="background mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src="./images/signup_img.jpg" className="img-fluid animated" alt="Signup" />
                        </div>
                        <div className="col-6">
                            <form className="signup-form" onSubmit={handleSubmit}>
                                <h2 className="text-center">Sign Up</h2>

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" name="email" className="form-control" id="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" className="form-control" id="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="confirm-password">Confirm Password</label>
                                    <input type="password" name="confirm_password" className="form-control" id="confirm-password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                                </div>

                                <button type="submit" className="btn btn-success btn-block">Sign Up</button>
                                <center><p className="mt-3">Or</p></center>
                                <p className="text-center mt-3">By signing up, you agree to our <a href="#">terms and conditions</a>.</p>
                                <Link to="/Login" className="btn btn-success btn-block">Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;