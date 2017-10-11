import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as selectedClientAction from '../actions/selectedClient';

class ClientDetail extends Component {

  componentDidMount() {
    this.props.selectedClientAction.findClient(this.props.match.params.id);
  }

  render() {
    let photourl = 'https://s3.us-east-2.amazonaws.com/g54capstone/person-placeholder.png';
    if (this.props.selectedClient[0]) {
      if (this.props.selectedClient[0].photourl !== null) {
        photourl = this.props.selectedClient[0].photourl;
      }
    }
    return (
      <div className="container gutter-top">

        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Client Details</li>
        </ol>

        <div className="row">

          <div className="col-md-2">
            <img className="img-thumbnail" alt="profile" src={photourl} />
          </div>

          <div className="col-md-10">
            <div className="card">
              <div className="card-block">
                <h4 class="card-title">{this.props.selectedClient[0] ? this.props.selectedClient[0].name : null}</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Source: &nbsp;&nbsp; {this.props.selectedClient[0] ? this.props.selectedClient[0].source : null}</li>
                  <li class="list-group-item">Phone: &nbsp;&nbsp; {this.props.selectedClient[0] ? this.props.selectedClient[0].phone : null}</li>
                  <li class="list-group-item">Email: &nbsp;&nbsp; {this.props.selectedClient[0] ? this.props.selectedClient[0].email : null}</li>
                  <li class="list-group-item">Assigned To: &nbsp;&nbsp; {this.props.selectedClient[0] ? this.props.selectedClient[0].assignedto : null}</li>
                  <li class="list-group-item">Comments: &nbsp;&nbsp; {this.props.selectedClient[0] ? this.props.selectedClient[0].comments : null}</li>
                </ul>
              </div>
            </div>
            <Link to={
              `/client/${this.props.selectedClient[0] ? this.props.selectedClient[0].id : null}`
            } className="btn btn-primary">Edit</Link> &nbsp;
            <Link to="/clients" className="btn btn-primary">Close</Link>
          </div>

        </div>

      </div>
    )
  }

}

function mapStateToProps(state, props) {
  return {
    clients: state.clients,
    selectedClient: state.selectedClient
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectedClientAction: bindActionCreators(selectedClientAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetail)
