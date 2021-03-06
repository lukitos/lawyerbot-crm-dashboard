import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router';
import firebase from '../firebase';
import config from '../config';

const DASHBOARD_URL = config.DASHBOARD_URL;

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
    console.log('in LeftNav >>> state=', this.state);
    console.log('in LeftNav >>> props=', this.props);
    const { redirect } = this.state;

    if (redirect) {
      // window.location.replace("http://capstonelawyerbot.s3-website.us-east-2.amazonaws.com/");
      // window.location.replace("http://localhost:3000");
      window.location.replace(DASHBOARD_URL);
      // return <Redirect to='/' />;
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

function mapStateToProps(state, props) {
  return {
    clients: state.clients
  }
}

export default connect(mapStateToProps)(LeftNav)
