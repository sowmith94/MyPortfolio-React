import React from 'react'

const Banner = ({personalInfo}) => {
    const {fullname,facebook,linkedin,github}=personalInfo;
    return (
        <div 
        className="banner-section" 
        id="banner"
        >
            <div className="banner-info">
                <h3>Welcome!</h3>
                <h1>I'm {fullname}</h1>
                <p className="banner-descp">I am a student at Lorem ipsum dolor sit amet consectetur, adipisicing elit. c eveniet. Repudiandae et error officia nostrum possimus!</p>
                <a href={facebook}><i className="fab fa-facebook-f"></i> </a>
                <a href={linkedin}><i className="fab fa-linkedin-in"></i></a>
                <a href={github}><i className="fab fa-github"></i></a>
            </div>            
        </div>
    )
}

export default Banner;
