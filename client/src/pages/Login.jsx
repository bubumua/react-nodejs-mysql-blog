import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <label>Email:</label>
                <input required type="email" className="authInput" placeholder="Enter your email..." />
                <label>Password:</label>
                <input required type="password" className="authInput" placeholder="Enter your password..." />
                <p>Error!:(</p>
                <button className="authButton">Login</button>
                <span>
                    Don't you have an account?
                    <Link to="/register"> Register </Link>
                </span>
            </form>
        </div>
    );
};

export default Login;