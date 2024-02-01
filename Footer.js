
import { FaInstagram, FaFacebook, FaTwitter, FaSquare } from "react-icons/fa";
import React from 'react';
function Footer() {
    return (
        <div className="footer">

            <p >Síguenos en redes sociales: </p>
            <ul className="social-media">
                <li><FaInstagram /></li>
                <li><FaFacebook /></li>
                <li><FaTwitter /></li>
                <li><FaSquare /></li>
            </ul>
        </div>
    );
}

export default Footer;

