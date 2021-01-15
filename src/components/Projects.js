import React from 'react'

const Projects = ({projectList}) => {
    return (
        <div className="projects-section" id="Projects">
            {projectList.map(project => (
                <div className="project-box">
                    <h1>{project.name}</h1>
                    <span>{project.company}</span>
                    <p>{project.descp}</p>
                </div>
            ))}
        </div>
    )
}

export default Projects;
