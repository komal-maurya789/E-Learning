import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
        .then(result => {console.log(result)
            if(result.data === "Success"){
            navigate('/')  
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-6">
                            <img src="./images/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#37517e', padding: "69px 0px" }}>
                            <div className="bg-white p-3 rounded w-75">
                                <h2>Log In</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email"><strong>Email</strong></label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter Email"
                                            className="form-control rounded-0"
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {/* {formerrors.email && <div className="text-danger">{formerrors.email}</div>} */}

                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password"><strong>Password</strong></label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Enter Password"
                                            className="form-control rounded-0"
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {/* {formerrors.password && <div className="text-danger">{formerrors.password}</div>} */}
                                    </div>

                                    <button type="submit" className="btn btn-success w-100">Log In</button>
                                    {/* {errorMessage && <p className="text-red-500 text-sm whitespace-pre-line text-center mt-4 "></p>} Display error message if exists */}
                                    <p>You agree with the terms and conditions.</p>
                                    <Link to="/Signup" className="btn btn-default border w-100 bg-light text-decoration-none">Create Account</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
