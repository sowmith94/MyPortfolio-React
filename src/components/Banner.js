import React from 'react'

const Banner = ({fullname}) => {
    console.log(fullname);
    return (
        <div 
        className="banner-section" 
        id="banner"
        >
            <div className="banner-info">
                <h3>Welcome</h3>
                <h1>I'm {fullname}</h1>
                <p className="banner-descp">I am a student at Lorem ipsum dolor sit amet consectetur, adipisicing elit. c eveniet. Repudiandae et error officia nostrum possimus!</p>
            </div>            
        </div>
    )
}

export default Banner;
