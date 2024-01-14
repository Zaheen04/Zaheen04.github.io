import React from 'react';
import Project from './project';
import {projectData} from './ProjectData';
import './project.css';

const ProjectList = () => {
    return ( <div>
        {projectData.map( element => {
            return (<Project projectData={element}/>)
        })}
    </div>)
}

export default ProjectList;