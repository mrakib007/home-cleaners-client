import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDescription from '../ServiceDescription/ServiceDescription';
import './Services.css';



const Services = () =>{
    const [services,setServices] = useState([]);
useEffect(()=>{
    fetch(' https://fathomless-wave-03932.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setServices(data));
},[])
    
    return(
    <section className="services-container container mt-5">
        <div className="text-center">
            <h5>OUR SERVICES</h5>
        </div>
        <div className="d-flex justify-content-center">
            <Row className="mt-5">
                {services.map((service) => (
                    <ServiceDescription service={service}  />
                ))}
            </Row>
        </div>
    </section>
);
};

export default Services;
