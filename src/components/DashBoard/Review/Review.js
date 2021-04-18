import React, { useState } from 'react';

const Review = () => {
  const [review,setReview] = useState({});

    const handleBlur = (e) =>{
      const newReview = {...review};
      newReview[e.target.name] = e.target.value;
      setReview(newReview);
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      const formData = new FormData();

      formData.append('name',review.name);
      formData.append('review',review.review);

      fetch('http://localhost:5000/review', {
        method: 'POST',
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <form ml-5 onSubmit={handleSubmit}>
        <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input onBlur={handleBlur} name="name" type="txt" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Name"/>
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Review</label>
        <input onBlur={handleBlur} name="review" type="txt" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Review Here"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
};

export default Review;