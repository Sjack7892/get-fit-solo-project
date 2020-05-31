import React, {Component} from 'react';
import { connect } from 'react-redux';
import './LogOutButton.css';

class LogOutButton extends Component {

click = () => {
  this.props.dispatch({ type: 'LOGOUT' });
  this.props.handleLogout();
}
  
  render() {
    return(
      <button 
      className="logoutButton"
      onClick={this.click}
    >
      Log Out
    </button>
      )
  }
    


};

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(LogOutButton);
