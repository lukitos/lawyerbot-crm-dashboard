import React, {Component} from 'react';
import {connect} from 'react-redux';

import Metric from './widgets/Metric';
import Doughnut from './widgets/Doughnut';
import Line from './widgets/Line';
import AssignmentList from './AssignmentList';

class Home extends Component {

  render() {
    console.log('in Home >>> props', this.props);

    let metricSettings1 = {
      icon: 'fa fa-address-card-o fa-5x',
      panelDisplay: 'panel panel-green',
      score: this.props.metrics[0].chat_lead,
      scoreLabel: '# Leads from Bot'
    };

    let metricSettings2 = {
      icon: 'fa fa-comments fa-5x',
      panelDisplay: 'panel panel-primary',
      score: this.props.metrics[0].chat_init,
      scoreLabel: '# Chats initiated'
    };

    let metricSettings3 = {
      icon: 'fa fa-clock-o fa-5x',
      panelDisplay: 'panel panel-yellow',
      score: '2',
      scoreLabel: '# Length in minutes'
    };

    let metricSettings4 = {
      icon: 'fa fa-plug fa-5x',
      panelDisplay: 'panel panel-red',
      score: '0',
      scoreLabel: '# Conn errors'
    };

    let chartSettings = {
      labels: Object.keys(this.props.chartData),
      datasets: [
        {
          label: 'source',
          data: Object.values(this.props.chartData),
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)']
        }
      ]
    }

    return (
      <div className="container gutter-top">

        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>

        <div className="row">
          <div className="col"><Metric metricSettings={metricSettings1} /></div>
          <div className="col"><Metric metricSettings={metricSettings2} /></div>
          <div className="col"><Metric metricSettings={metricSettings3} /></div>
          <div className="col"><Metric metricSettings={metricSettings4} /></div>
        </div>

        <div className="row">
          <div className="col"><Doughnut chartSettings={chartSettings}/></div>
          <div className="col"><Line chartSettings={chartSettings}/></div>
        </div>

        <AssignmentList />

      </div>
    )
  }

}

function mapStateToProps(state, props) {
  return {
    chartData: state.chartData,
    metrics: state.metrics
  }
}

export default connect(mapStateToProps, null)(Home)
