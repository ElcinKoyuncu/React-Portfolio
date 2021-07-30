import React from 'react';
// import Resume from '../../assets/Resume.pdf';

const Footer = () => {
	return (
        <nav className="navbar fixed-bottom navbar-light bg-light" id="footer">
            <span className="navbar-brand mx-left">
                <small>contact me at: elcinkoyuncu@gmail.com</small>
            </span>
            <span className="navbar-brand mx-right">
                <a 
                    className="ml-4 text-dark" 
                    href="https://github.com/ElcinKoyuncu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Github Repositories"
                >
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a 
                    className="ml-4 text-dark" 
                    href="www.linkedin.com/in/elcin-koyuncu-us" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Linkedin"
                >
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a 
                    className="ml-4 text-dark" 
                    href="mailto:elcinkoyuncu@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Email Me"
                >
                    <i className="fas fa-envelope fa-2x"></i>
                </a>
                {/* <a 
                    className="ml-4 text-dark" 
                    title="Download Resume" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={Resume} download
                >
                    <i className="fas fa-file-download fa-2x"></i>
                </a> */}
            </span>
        </nav>
	);
};

export default Footer;