import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import * as clientAction from '../actions/client';

class ClientForm extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  processSubmit = (values) => {
    let client = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      source: values.source,
      assignedto: values.assignedto,
      comments: values.comments
    };

    if (this.props.match.params.id === 'add') {
      this.props.clientAction.addClient(client).then(() => {
        this.setState({ redirect: true });
      });
    } else {
      this.props.clientAction.updateClient(parseInt(this.props.match.params.id, 10), client).then(() => {
        this.setState({ redirect: true });
      });
    }
  }

  render () {
    const { redirect } = this.state;
    let title = this.props.match.params.id === 'add' ? 'Add a new Client' : 'Edit Client';
    if (redirect) {
      return <Redirect to='/clients' />;
    } else {
      return (
        <div className="container gutter-top">

          <ol className="breadcrumb">
            <li className="breadcrumb-item active">{title}</li>
          </ol>

          <div class="card">
            <div class="card-block">
              <p class="card-text">
                <form className="form-horizontal" onSubmit={this.props.handleSubmit(this.processSubmit)}>
                  <fieldset>
                    <div className="form-group">
                      <label htmlFor="name" className="col-lg-2 control-label">Name:</label>
                      <div className="col-lg-10">
                        <Field name="name" component="input" type="text" className="form-control" placeholder="Enter the client's name" autoComplete="off" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="col-lg-2 control-label">Phone:</label>
                      <div className="col-lg-10">
                        <Field name="phone" component="input" type="text" className="form-control" placeholder="Enter the client's phone number" autoComplete="off" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="col-lg-2 control-label">Email:</label>
                      <div className="col-lg-10">
                        <Field name="email" component="input" type="text" className="form-control" placeholder="Enter the client's email address" autoComplete="off" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="source" className="col-lg-2 control-label">Lead source:</label>
                      <div className="col-lg-10">
                        <Field name="source" component="select" className="form-control">
                          <option></option>
                          <option>bot</option>
                          <option>email</option>
                          <option>phone</option>
                          <option>website</option>
                        </Field>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="assignedto" className="col-lg-2 control-label">Assigned to:</label>
                      <div className="col-lg-10">
                        <Field name="assignedto" component="select" className="form-control">
                          <option></option>
                          <option>John Ayers</option>
                          <option>Shu Sia Lukito</option>
                        </Field>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="comments" className="col-lg-2 control-label">Comments:</label>
                      <div className="col-lg-10">
                        <Field name="comments" component="textarea" className="form-control" placeholder="Enter comments" autoComplete="off" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-lg-10 col-lg-offset-2">
                        <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
                        <Link to="/clients" className="btn btn-primary">Cancel</Link>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </p>
            </div>
          </div>

        </div>
      )
    }
  }

}

function mapStateToProps(state, props) {
  return {
    clients: state.clients,
    initialValues:
      state.clients.find(client => {
        if (props.match) {
          return client.id === parseInt(props.match.params.id, 10);
        } else {
          return '';
        }
      })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clientAction: bindActionCreators(clientAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'client' })(ClientForm));
