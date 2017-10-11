import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import * as assignedClientAction from '../actions/assignedClients';
import Client from './Client';

class AssignmentList extends Component {

  getAssignmentList() {
    return this.props.assignedClients.map(client => <Client key={client.id} client={client} />);
  }

  render () {
    console.log('in AssignmentList >>> props', this.props);
    return (
      <div className="card">
        <div className="card-header">
          <p><i className="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp; Clients Assigned to Me</p>
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
                {this.getAssignmentList()}
              </tbody>
            </table>

        </div>
      </div>
    )
  }

}

function mapStateToProps(state, props) {
  return {
    assignedClients: state.assignedClients
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     assignedClientAction: bindActionCreators(assignedClientAction, dispatch)
//   }
// }

export default connect(mapStateToProps, null)(AssignmentList)
