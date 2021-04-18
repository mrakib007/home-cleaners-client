import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllBooking = () => {

    const [bookings, setBooking] = useState([]);
    useEffect(() => {
      fetch(" https://fathomless-wave-03932.herokuapp.com/book")
        .then((res) => res.json())
        .then((data) => setBooking(data));
    }, []);


    return (
        <div>
            This is all booking {bookings.length}
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
          {bookings.map((booking) => (
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

export default AllBooking;