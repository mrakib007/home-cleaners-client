import React from 'react';

const Testimonial = (props) => {
    // const { review } = props;
    const {  name,review } = props.review;
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{review}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <div>
                    <h6 className="text-primary">{name}</h6>
                    
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
