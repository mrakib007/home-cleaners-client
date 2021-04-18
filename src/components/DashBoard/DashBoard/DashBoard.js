import React, { useEffect, useState } from "react";
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

const DashBoard = () => {

  return (
    <section>
      <Container fluid style={{ height: "100%", backgroundColor: "#F4FDFB" }}>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={6} className="ml-3 mt-3 p-4 pr-5">
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

            <Route path="/book/:id">
              <Book></Book>
            </Route>

            <Route path="/bookingList">
              <BookingList></BookingList>
            </Route>

            <Route path="/review">
              <Review></Review>
            </Route>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default DashBoard;
