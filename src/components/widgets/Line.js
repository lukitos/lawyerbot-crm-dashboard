import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

class Charts extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <i className="fa fa-area-chart" aria-hidden="true"></i> &nbsp;
          Lead Generation Source
        </div>
        <div className="card-block">
          <p className="card-text">
            <Line data={this.props.chartSettings} options={{
              title: {
                display: false,
                text: 'Lead Source',
                fontSize: 25
              },
              legend: {
                display: false,
                position: 'right'
              }
            }}/>
          </p>
        </div>
      </div>
    )
  }
}

export default Charts;
