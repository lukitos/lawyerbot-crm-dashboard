import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router';
import firebase from '../firebase';

const renderField = ({ id, input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} id={id} type={type} className="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class Login extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      redirect: false
    };
  }

  componentDidMount() {
    console.log('firebase ', firebase);
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

  handleLogin = (values) => {
    let email = values.username;
    let password = values.password;
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('In loginWithEmail >>> Logged in user=', user);
        this.setState({ redirect: true });
        return user;
      })
      .catch(err => console.log('Authentication error ', err));
  }

  render () {

    console.log('in Auth render >>> props=', this.props);

    const { error } = this.props;

    if (this.state.redirect) {
      return <Redirect to='/home' />;
    } else {
      return (
        <div className="container spacer">

          <div className="card card-container">

            <img id="profile-img" alt="profile" className="profile-img-card" src="https://s3.us-east-2.amazonaws.com/g54capstone/bot-logo.png" />

            <p id="profile-name" className="profile-name-card"></p>

            <form onSubmit={this.props.handleSubmit(this.handleLogin)} className="form-signin">

              <Field id="inputEmail" name="username" type="email" component={renderField} label="email address" />
              <Field id="inputPassword" name="password" type="password" component={renderField} label="password" />
              {error && <strong>{error}</strong>}
              <div id="remember" className="checkbox">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-lg btn-primary btn-block btn-signin">Sign In</button>
            </form>

          </div>

        </div>
      )
    }
  }

}

export default reduxForm({
  form: 'Login'
})(Login)
