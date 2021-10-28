import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="p-2 bg-dark text-white">
            <h1>Health Care</h1>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noreferrer">www.mdlrrahman779@gmail.com</a><br />
            <p>Phone: 01793054198</p>
            <p className="mb-4">Address: Dhaka-1230, Bangladesh</p>
            <hr className="w-75 mx-auto" />
            <small>Copyright ©2021 All rights reserved | This template is made by Lutfor Rahman</small>
        </footer>
    );
};

export default Footer;