import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router';
import firebase from '../firebase';

class LeftNav extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  handleLogout() {
    console.log('in LeftNav >>> logout');
    firebase.auth().signOut()
      .then(() => {
        console.log('Sign out successful');
        this.setState({ redirect: true });
      })
      .catch(err => console.log('Sign out error ', err));
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      window.location.replace("http://localhost:3000");
    } else {
      return (
        <div>
          <ul className="list">
            <h5>
              <strong>CRM LITE</strong>
            </h5>
            <li><Link to="/home">Dashboard</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><a onClick={this.handleLogout.bind(this)}>Logout</a></li>
          </ul>
        </div>
      )
    }
  }

}

export default LeftNav;
