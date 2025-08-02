// src/App.js
import React, { Component } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  loginHandler = () => {
    this.setState({ isLoggedIn: true });
  };

  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let pageContent;

    if (this.state.isLoggedIn) {
      pageContent = <UserPage />;
    } else {
      pageContent = <GuestPage />;
    }

    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1>Ticket Booking App</h1>
        {pageContent}
        <br />
        {this.state.isLoggedIn ? (
          <button onClick={this.logoutHandler}>Logout</button>
        ) : (
          <button onClick={this.loginHandler}>Login</button>
        )}
      </div>
    );
  }
}

export default App;
