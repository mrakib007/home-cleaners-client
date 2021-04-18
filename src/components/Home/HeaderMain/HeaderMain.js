import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import cleaner from '../../../images/cleaner.jpg';
import './HeaderMain.css';

const HeaderMain = () => (
    <main>
        <Container>
            <Row style={{ height: '100vh' }} className="d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1>
                        Your Home, <br /> Our Responsibility
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam similique
                        quo minus deleniti pariatur!
                    </p>
                    <Button>Set A Date</Button>
                </div>
                <div className="col-md-6">
                    <img src={cleaner} alt="" className="img-fluid" />
                </div>
            </Row>
        </Container>
    </main>
);

export default HeaderMain;
