import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./SideBar.css";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://fathomless-wave-03932.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        {isAdmin && (
          <div>
            <li>
              <Link to="/addService" className="text-white">
                <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/allBooking" className="text-white">
                <span>All Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-white">
                <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/manageService" className="text-white">
                <span>Manage Service</span>
              </Link>
            </li>
          </div>
        )}

        <li>
          <Link to="/book" className="text-white">
            <span>Book</span>
          </Link>
        </li>
        <li>
          <Link to="/bookingList" className="text-white">
            <span>Booking List</span>
          </Link>
        </li>
        <li>
          <Link to="/review" className="text-white">
            <span>Review</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SideBar;
