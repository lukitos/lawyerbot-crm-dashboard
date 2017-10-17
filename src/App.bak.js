import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import * as clientAction from './actions/client';
import * as assignedClientAction from './actions/assignedClients';
import * as chartAction from './actions/chartData';
import * as metricAction from './actions/metrics';

import firebase from './firebase.js';
import Login from './components/Login';
import Home from './components/Home';
import Logo from './components/Logo';
import LeftNav from './components/LeftNav';
import ClientList from './components/ClientList';
import ClientForm from './components/ClientForm';
import ClientDetail from './components/ClientDetail';

import './App.css';

let counter = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      authenticated: null
    };
  }

  componentDidMount() {
    // Get data
    this.props.clientAction.fetchClients();
    this.props.chartAction.fetchChartData();
    this.props.metricAction.getMetrics();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
         currentUser: {
           displayName: user.displayName,
           email: user.email,
           photoURL: user.photoURL
         },
         authenticated: true
        });
        this.props.assignedClientAction.fetchClients(user.displayName);
      } else {
        console.log('in App componentDidMount >>> no user logged in');
      }
    });

  }

  render() {

    counter++;
    const history = createBrowserHistory();

    console.log('in App >>> state.currentUser=', this.state.currentUser);
    return (
      this.state.authenticated ?
      <Router key={counter} history={history}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 sidebar">
              <br/>
              <Logo />
              <br/>
              <LeftNav />
            </div>
            <div className="col-md-10">
              <Route exact path="/home" component={Home} />
              <Route exact path="/clients" component={ClientList} />
              <Route exact path="/client/:id" component={ClientForm} />
              <Route exact path="/detail/:id" component={ClientDetail} />
            </div>
          </div>
        </div>
      </Router>
      :
      <Router history={history}>
        <div className="container">
          <div className="row">
            <div className="col">
              <Route exact path="/" component={Login} />
            </div>
          </div>
        </div>
      </Router>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    clientAction: bindActionCreators(clientAction, dispatch),
    assignedClientAction: bindActionCreators(assignedClientAction, dispatch),
    chartAction: bindActionCreators(chartAction, dispatch),
    metricAction: bindActionCreators(metricAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
