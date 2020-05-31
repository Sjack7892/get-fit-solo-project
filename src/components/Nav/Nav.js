import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import HomeIcon from '@material-ui/icons/Home';




const Nav = (props) => (
  <div className={props.navStatus} id="nav">
    <ul>
      <div className="nav-right">
        <li>
          <Link onClick={props.navChangeStatus} className="nav-link" to="/home">
            {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
            {/* {props.user.id ? 'Home' : 'Login / Register'} */}
            <div>
              Home
            <HomeIcon className="icon" />
            </div>
          </Link>
        </li>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {/* {props.user.id && ( */}
        <li>
          <Link onClick={props.navChangeStatus} className="nav-link" to="/nutrition">
            <div>
              Nutrition
                  <RestaurantIcon className="icon" />
            </div>
          </Link>
        </li>
        {/* // )} */}
        <li>
          <Link className="nav-link" >
            <div>
              Workout
                  <FitnessCenterIcon className="icon" />
            </div>
          </Link>
        </li>
        <li>
          <Link onClick={props.navChangeStatus} className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <div className="nav-link" >
            <LogOutButton handleLogout={props.handleLogout} />
            <MeetingRoomIcon className="icon" />
          </div>
        </li>
      </div>
    </ul>
    <button onClick={props.navChangeStatus}>Close</button>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
