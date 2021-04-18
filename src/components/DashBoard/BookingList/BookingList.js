import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';

const BookingList = () => {
    const [bookingList, setBookingList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    useEffect(() => {
      fetch(" https://fathomless-wave-03932.herokuapp.com/deals?email=" + loggedInUser.email)
        .then((res) => res.json())
        .then((data) => setBookingList(data));
    }, []);
    return (
        <div>
            <h4>You have {bookingList.length} bookings</h4>
            <Table striped bordered hover>
        <thead>
          <tr>
            <th>BookName</th>
            <th>Email</th>
            <th>Price</th>
            {/* <th>DeleteBook</th> */}
          </tr>
        </thead>
        <tbody>
          {bookingList.map((booking) => (
            <tr>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
        </div>
    );
};

export default BookingList;