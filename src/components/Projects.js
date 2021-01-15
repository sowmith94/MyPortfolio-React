import React from 'react'

const Projects = ({projectList}) => {
    return (
        <div className="projects-page" id="Projects">
            <h1>Projects</h1>
            <hr/>
            <div className="projects-section">
            {projectList.map(project => (
                <div className="project-box">
                    <h1>{project.name}</h1>
                    <span>{project.company}</span>
                    <p>{project.descp}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projects;
