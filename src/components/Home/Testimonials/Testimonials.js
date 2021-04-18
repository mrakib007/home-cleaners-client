import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () =>{
    const [reviews,setReview] = useState([]);
    useEffect(()=>{
        fetch(' https://fathomless-wave-03932.herokuapp.com/review')
        .then((res) => res.json())
        .then((data) => setReview(data));
    },[])
return    (
    <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header text-center">
                <h5 className="text-success text-uppercase">Reviews Of Our Clients</h5>
            </div>
            <div className="card-deck mt-5">
                {reviews.map((review) => (
                    <Testimonial review={review} />
                ))}
            </div>
        </div>
    </section>
);
 };
export default Testimonials;
