import React from 'react';

const Skills = ({personalInfo}) => {
    const {skillList}=personalInfo;
    // console.log(skillList);
    return (
        <div className="skills-section" id="Skills">
            <h1>Skills</h1>
            {skillList.map(skill => (
                <div className="skill-progress">
                    <em>{skill.name}</em>
                    <div className="progress-bar">
                        <div className="filler" style={{width:`${skill.level}%`}}>
                        </div>
                    </div>
                </div>
            ))}            
        </div>
    )
}

export default Skills
