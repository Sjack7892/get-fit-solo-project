import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import NutritionPage from '../NutritionPage/NutritionPage';
import WorkoutPage from '../WorkoutPage/WorkoutPage';

// import { GiHamburgerMenu } from 'react-icons/gi';
import {FaHamburger} from 'react-icons/fa';

import './App.css';

class App extends Component {

  state = {
    nav: 'navStart'
  }

  handleClick = () => {
    if (this.state.nav === 'navClose' || this.state.nav === 'navStart'){
      this.setState({
        nav: 'navOpen'
      })
    } else {
        this.setState({
          nav: 'navClose'
        })
    }
  }

  handleLogout = () => {
      this.setState({
        nav: 'navStart'
      })
  }

  componentDidMount() {
    this.setState({
      nav: 'navStart'
    })
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <div>
        {this.props.user.id && (
          <div className="menu">
          <p style={{fontSize: 50}}>GET FIT</p>
          <FaHamburger className="menuButton" onClick={this.handleClick} />
          </div>
        )}

        <Router>
          <div>
            {this.props.user.id ? (<Nav handleLogout={this.handleLogout} navChangeStatus={this.handleClick} navStatus={this.state.nav}/>) : null}
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />
              {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
              <Route
                exact
                path="/about"
                component={AboutPage}
              />
              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
              <ProtectedRoute
                exact
                path="/home"
                component={UserPage}
              />
              {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
              <ProtectedRoute
                exact
                path="/nutrition"
                component={NutritionPage}
              />
                <ProtectedRoute
                exact
                path="/workout"
                component={WorkoutPage}
              />

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
