import React from 'react';
import { Row } from 'react-bootstrap';
import clean1 from '../../../images/clean1.jpg';
import clean2 from '../../../images/clean2.jpg';
import sofaClean from '../../../images/sofaClean.jpg';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
// import './Services.css';

const project = [
    {
        name: 'Gulshan Project',
        img: clean1,
    },
    {
        name: 'Banani Project',
        img: sofaClean,
    },
    {
        name: 'Niketon Project',
        img: clean2,
    },
];

const LattestProject = () => (
    <section className="services-container container mt-5">
        <div className="text-center">
            <h5>LATEST PROJECTS</h5>
        </div>
        <div className="d-flex justify-content-center">
            <Row className="mt-5">
                {project.map((project) => (
                    <ProjectDetails project={project} key={project.name} />
                ))}
            </Row>
        </div>
    </section>
);

export default LattestProject;
