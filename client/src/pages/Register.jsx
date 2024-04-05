import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="auth">
            <h1>Register</h1>
            <form>
                <label>Email:</label>
                <input required type="email" className="authInput" placeholder="Enter your email..." />
                <label>Password:</label>
                <input required type="password" className="authInput" placeholder="Enter your password..." />
                <p>Error!:(</p>
                <button className="authButton">Register</button>
                <span>
                    Already have an account?
                    <Link to="/login"> Login </Link>
                </span>
            </form>
        </div>
    );
};

export default Register;