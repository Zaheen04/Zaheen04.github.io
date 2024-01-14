import React from 'react';
import './project.css';
import profile from '../../assets/profile.jpeg';
import {Link} from 'react-scroll';

const Project = ({projectData}) => {
    return (
        <div className="projectContainer" >
            <img src={projectData.screenshot} className="pro"></img>
            <div>
                <h1 className='title'>{projectData.name}</h1>
                <div className='title'>
                {projectData.techList.map(element => {
                    return (<Link>
                    <button className="projectToolChip">{element}</button>
                    </Link>)
                })}
                </div>
                <p className='title'>{projectData.description}</p>
{/* todo : add working links through projectData.link */}
                <Link  target = "_blank">
                    <button className="projectLinkChip">View Live Project</button>
                </Link>
            </div>
        </div>
    );
}
export default Project;