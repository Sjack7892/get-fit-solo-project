import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputAdornment, InputLabel, Input } from '@material-ui/core';
import { PermIdentity, LockOutlined } from '@material-ui/icons';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form className="loginForm" onSubmit={this.registerUser}>
          <h1 className="title">Get Fit</h1>
          <h3 className="loginSubTitle">Sign up</h3>
          <div>
            <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
            <Input
              // id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <PermIdentity />
                </InputAdornment>
              }
              label="Username"
              // id="filled-basic"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </div>
          <br></br>
          {/* <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div> */}
          {/* <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div> */}
          <div>
            <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
            <Input
              // id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <LockOutlined />
                </InputAdornment>
              }
              label="Password"
              // id="filled-basic"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Continue"
            />
          <div className="loginLinks">
          <span style={{opacity: 0.5}}>Already have an account?</span>
          <br/>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </button>
          </div>
        </form>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

