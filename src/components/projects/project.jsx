import React from 'react';
import './project.css';
import profile from '../../assets/profile.jpeg';
import {Link} from 'react-scroll';

const Project = ({projectData}) => {
    return (
        <div id="projects" className="projectContainer" >
            <img src={projectData.screenshot} className="projectImage"></img>
            <div>
                <h1 className='title'>{projectData.name}</h1>
                <div className='title'>
                {projectData.techList.map(element => {
                    return (
                    <button className="projectToolChip">{element}</button>
                    )
                })}
                </div>
                <p className='title'>{projectData.description}</p>
                <a href={projectData.link} target = "_blank">
                    <button className="projectLinkChip">View Live Project</button>
                </a>
                <a href={projectData.githubLink} target = "_blank">
                    <button className="projectLinkChip">View Code</button>
                </a>
            </div>
        </div>
    );
}
export default Project;