import React from 'react';
import { Button } from 'react-bootstrap';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';

const Footer = () => {
    const noNamed = [
        { name: 'Emergency Service'},
        { name: 'Vast Area Cleaning'},
        { name: 'Interior Cleaning'},
    ];
    const ourAddress = [
        { name: 'Gulshan, Sector:3'}
    ];
    const services = [
        { name: 'Emergency Service'},
        { name: 'Take Service'},
        { name: 'Home Painting'},
        { name: 'Area Cleaning'},
    ];
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="." menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Services" menuItems={services} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
        
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <Button variant="primary">01777777777</Button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
