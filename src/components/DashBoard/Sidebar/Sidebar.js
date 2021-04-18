import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCommentDots, faSignOutAlt,faThLarge, faCalendar,faCalendarPlus, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
console.log(isAdmin);
    useEffect(() => {
        fetch('https://immense-hamlet-65512.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, []);

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
            <li>
                <Link to="/dashboard" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
            </li>
            <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/userBookList" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>My Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
         { isAdmin && <div>
                <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>OrderList</span>
                    </Link>
                </li>
                <li>
                    <Link to="/inventory" className="text-white" >
                        <FontAwesomeIcon icon={faCalendarPlus} /> <span>Add Event</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageService" className="text-white" >
                        <FontAwesomeIcon icon={faThLarge} /> <span>Management</span>
                    </Link>
                </li>
            </div>}
        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default Sidebar;