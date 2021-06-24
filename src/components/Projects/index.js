import React from 'react';
import PhotoList from '../PhotoList';

function Projects({currentProject}) {
    const {name, description} = currentProject;
    return (
        <section>
            <h1>
            {name}
            </h1>
            <p>{description}</p>
            <PhotoList category={currentProject.name} />
        </section>
    )
}

export default Projects;