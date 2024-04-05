import React from "react";
import Logo from "../img/logo192.png";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={Logo} alt="logo" />
            <span>© 2024 MERN Blog. Made with ♥ and <b>React.js</b></span>
        </footer>
    );
};

export default Footer;