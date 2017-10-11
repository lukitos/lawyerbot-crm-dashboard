import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Client from './Client';
// import * as clientAction from '../actions/client';

class ClientList extends Component {

  getClientList() {
    return this.props.clients.map(client => <Client key={client.id} client={client} />);
  }

  render () {
    return (
      <div className="container gutter-top">

        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Clients</li>
        </ol>

        <div className="card">
          <div className="card-header">
            <Link className="btn btn-success" to={`/client/add`}>Add a New Client</Link>
          </div>
          <div className="card-block">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Source</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.getClientList()}
                </tbody>
              </table>
            
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    clients: state.clients
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     clientAction: bindActionCreators(clientAction, dispatch)
//   }
// }

export default connect(mapStateToProps, null)(ClientList)
