import React from 'react';
import { Button, Col } from 'react-bootstrap';

const ProjectDetails = (props) => {
    const { project } = props;
    const { img, name } = project;
    return (
        <Col md={4} className="text-center">
            <img style={{ height: '200px' }} src={img} alt="" />
            <h5 className="mt-3 mb-3">{name}</h5>
            <p className="text-secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, magnam!
            </p>
        </Col>
    );
};

export default ProjectDetails;