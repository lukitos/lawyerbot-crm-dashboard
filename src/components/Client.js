import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as clientAction from '../actions/client';

const Client = (props) => {

  return (
    <tr>
      <td><Link className="client-link" to={`/detail/${props.client.id}`}>{props.client.name}</Link></td>
      <td>{props.client.phone}</td>
      <td>{props.client.email}</td>
      <td>{props.client.source}</td>
      <td>
        <Link className="btn btn-info" to={`/client/${props.client.id}`}><i className="fa fa-pencil" aria-hidden="true"></i>
        </Link> &nbsp;
        <a className="btn btn-danger" onClick={() => props.clientAction.deleteClient(props.client.id, props.client)} aria-label="Delete">
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </a>
      </td>
    </tr>
  )

}

function mapDispatchToProps(dispatch) {
  return {
    clientAction: bindActionCreators(clientAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Client)
