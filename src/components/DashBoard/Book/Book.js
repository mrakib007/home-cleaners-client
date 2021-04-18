import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Book = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const {id} = useParams();
    const [order,setOrder] = useState([]);
    const [info,setInfo] = useState({});
    const [payment,setPayment] = useState(null);
    useEffect(() => {
       
        fetch(`http://localhost:5000/book/${id}`)
          .then((res) => res.json())
          .then((data) => setOrder(data[0]));
      }, [id]);


    const handleBlur = e =>{
      const newInfo = {...info};
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
    }
    const handlePayment=(paymentId)=>{
      setPayment(paymentId);
      console.log(payment);
    }
    const handleSubmit= e =>{
      e.preventDefault();

      const formData = new FormData();
      formData.append('name', info.name);
      formData.append('serviceName', info.serviceName);
      formData.append('email', loggedInUser.email);
      formData.append('price',order.price);
    
    fetch('http://localhost:5000/book', {
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
    };
    return (
       
        <div className="row">
          <div className="col-md-7">
            <h4>Yor searched service is : {order.name}</h4>
            <h4>You will have to pay {order.price} taka.</h4>
        <form ml-5 onSubmit={handleSubmit}>
        <div class="form-group">
        <label for="exampleInputEmail1">Customer Name</label>
        <input onBlur={handleBlur} name="name" type="txt" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Name"/>
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Enter Service Name</label>
        <input onBlur={handleBlur} name="serviceName" type="txt" class="form-control" id="exampleInputEmail1"  placeholder="Enter Service Name"/>
        </div>

        <Button type="submit" class="btn btn-primary">Submit</Button>

        </form>
          </div>

          <div className="col-md-5">
          <div className="m-3">
        <ProcessPayment handlePayment={handlePayment}></ProcessPayment>

        </div>
          </div>
        </div>

    );
};

export default Book;