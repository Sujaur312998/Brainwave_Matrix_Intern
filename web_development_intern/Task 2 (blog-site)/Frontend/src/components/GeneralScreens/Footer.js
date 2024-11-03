import React from 'react';
import '../../Css/Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer">
            </div>
            <div className="copyright">
                <p className="copyright-blog">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
