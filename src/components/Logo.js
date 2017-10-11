import React, { Component } from 'react';
import firebase from '../firebase';

class Logo extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
         currentUser: {
           displayName: user.displayName,
           email: user.email,
           photoURL: user.photoURL
         }
        });
      } else {
        console.log('in Auth componentDidMount >>> no user logged in');
      }
    });
  }

  render() {

    console.log('In Logo >> currentUser=', this.state.currentUser);

    return (
      <div>
        <div className="logo">
          {
            this.state.currentUser ?
            <img src={this.state.currentUser.photoURL} className="img-responsive d-block mx-auto" alt="Logo"/> :
            null
          }
          <br />
        </div>
        <p className="greeting">
          Welcome <br />
          {
          this.state.currentUser ? this.state.currentUser.displayName : null
          }
        </p>
      </div>
    )

  }

}

export default Logo;
