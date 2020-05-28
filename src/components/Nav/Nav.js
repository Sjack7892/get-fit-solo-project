import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';




const Nav = (props) => (
  <div className="nav">
    <ul>
      <div className="nav-right">
        <li>
          <Link className="nav-link" to="/home">
            {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
            {props.user.id ? 'Home' : 'Login / Register'}
          </Link>
        </li>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.user.id && (
          <>
            <li>
              <Link className="nav-link" to="/workout">
                <div>
                Workout<br/>
                <FitnessCenterIcon />
                </div>
               
              </Link>
            </li>
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <LogOutButton />
        </li>
      </div>
    </ul>
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
