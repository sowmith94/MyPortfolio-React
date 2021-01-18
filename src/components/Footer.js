import React from 'react';

const Footer = ({personalInfo}) => {
    const {email,facebook,linkedin,github}=personalInfo;
    return (
        <div className="footer-section">
            <p>email: {email}</p>
            <a href={facebook}><i className="fab fa-facebook-f"></i> </a>
            <a href={linkedin}><i className="fab fa-linkedin-in"></i></a>
            <a href={github}><i className="fab fa-github"></i></a>
        </div>
    )
}

export default Footer
