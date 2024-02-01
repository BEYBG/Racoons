import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
 
import racoon from '../images/racoon.jpg';


function Header() {
    return (

      
        <div className="header">

            <ul className="header-list">
                <li><Link to="/" className="header-link"><img src={racoon} alt="Descripción de la imagen" /></Link></li>
                <li><Link to="/about" className="about-link">About</Link></li>
                <li><Link to="/contact" className="contact-link">Contact</Link></li>
                <li><Link to="/gallery" className="gallery-link">Gallery</Link></li>
                <li><Link to="/blog" className="blog-link">Blog</Link></li>
            </ul>
        </div>
    );
}

export default Header;
