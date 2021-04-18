import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => (
    <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: '100vh' }}
    >
        <ul className="list-unstyled">
            <li>
                {/* <Link to="/dashboard" className="text-white">
                     <span>Dashboard</span>
                </Link> */}
            </li>
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

export default SideBar;
