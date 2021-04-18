import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ServiceDescription = (props) => {
    const { service } = props;
    const { price, name ,description} = service;

    const history = useHistory();
    const serviceInfo = (id) =>{
        const url = `/book/${id}`;
        history.push(url);
    }

    return (
        <Col md={4} className="text-center">
            <img style={{ height: '200px' }} src={`https://fathomless-wave-03932.herokuapp.com/${service.img}`} alt="" />
            <h5 className="mt-3 mb-3">{name}</h5>
            <h5>Price : {price}</h5>
            <p className="text-secondary">
                {description}
            </p>
            <Button onClick={()=>serviceInfo(service._id)}>Book Now</Button>
        </Col>
    );
};

export default ServiceDescription;