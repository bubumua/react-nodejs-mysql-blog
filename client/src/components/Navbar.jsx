import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo192.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="links">
                    <Link className="link">link</Link>
                    <Link className="link">link</Link>
                    <Link className="link">link</Link>
                    <span>Bubu</span>
                    {/* <span>Logout</span> */}
                    <Link to="/login">Logout</Link>
                    <Link to="/write" className="link write">write</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 
