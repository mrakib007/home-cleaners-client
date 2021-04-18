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
    useEffect(() => {
       
        fetch(`http://localhost:5000/book/${id}`)
          .then((res) => res.json())
          .then((data) => setOrder(data[0]));
      }, [id]);


      const checkOut = (order,email) =>{
        const orderData = {
          name: order.name,
          price: order.price,
          email:email,
          date: new Date().toDateString("dd/MM/yyyy")
        }

        const url = `http://localhost:5000/addBooking`;
        fetch(url,{
          method:'POST',
          headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(orderData)
        })
        .then(res=>console.log('checkout data uploaded',res));
    };

    const handleBlur = e =>{
      const newInfo = {...info};
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
    }

    const handleSubmit= e =>{

    }
    return (
        // <div>
        //     You have to pay {order.price} taka
        //        <Button className="btn-success" onClick={()=>checkOut(order,loggedInUser.email)}>Checkout</Button>
        // </div>
        <div className="row">
          <div className="col-md-7">
            
        <form ml-5 onSubmit={handleSubmit}>
        <div class="form-group">
        <label for="exampleInputEmail1">Customer Name</label>
        <input onBlur={handleBlur} name="name" type="txt" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Name"/>
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Customer Email</label>
        <input onBlur={handleBlur} name="email" type="txt" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Email"/>
        </div>

        <Button type="submit" class="btn btn-primary">Submit</Button>

        </form>
          </div>

          <div className="col-md-5">
          <div className="m-3">
        <ProcessPayment></ProcessPayment>

        </div>
          </div>
        </div>

    );
};

export default Book;