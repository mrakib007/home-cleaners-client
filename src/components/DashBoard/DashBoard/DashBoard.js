import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route } from "react-router";
import AddService from "../AddService/AddService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageService from "../ManageService/ManageService";
import Book from "../Book/Book";
import BookingList from "../BookingList/BookingList";
import Review from "../Review/Review";
import SideBar from "../SideBar/SideBar";
import AllBooking from "../AllBooking/AllBooking";
import { UserContext } from "../../../App";

const DashBoard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setAdmin] = useState([]);

  // useEffect(() => {
  //   fetch(" https://fathomless-wave-03932.herokuapp.com/admin?email=" + loggedInUser.email)
  //     .then((res) => res.json())
  //     .then((data) => setAdmin(data));
  // }, []);

  // useEffect(() => {
  //   fetch(" https://fathomless-wave-03932.herokuapp.com/admin",{
  //     method:'POST',
  //     headers:{'content-type':'application/json'},
  //     body:JSON.stringify({email:loggedInUser.email})
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setAdmin(data));
  // }, []);

  return (
    <section>
      <Container fluid style={{ height: "100%", backgroundColor: "#F4FDFB" }}>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>

          <Col md={6} className="ml-3 mt-3 p-4 pr-5">
            <div>
              <Route path="/addService">
                <AddService></AddService>
              </Route>

              <Route path="/makeAdmin">
                <MakeAdmin></MakeAdmin>
              </Route>

              <Route path="/allBooking">
                <AllBooking></AllBooking>
              </Route>

              <Route path="/manageService">
                <ManageService></ManageService>
              </Route>
            </div>


            <div>
              <Route path="/book/:id">
                <Book></Book>
              </Route>

              <Route path="/bookingList">
                <BookingList></BookingList>
              </Route>

              <Route path="/review">
                <Review></Review>
              </Route>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default DashBoard;
