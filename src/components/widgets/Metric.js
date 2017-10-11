import React from 'react';

const Metric = (props) => {
  let { icon, panelDisplay, score, scoreLabel } = props.metricSettings;
  return (
    <div className={panelDisplay}>
      <div className="panel-heading">
        <div className="row">
          <div className="col-xs-3 alert-spacer">
            <i className={icon}></i>
          </div>
          <div className="col-xs-9 text-right">
            <div className="huge">{score}</div>
            <div>{scoreLabel}</div>
          </div>
        </div>
      </div>
      <div className="panel-footer">
        <span className="pull-left">View Details</span>
        <span className="pull-right">
          <i className="fa fa-arrow-circle-right"></i>
        </span>
        <div className="clearfix"></div>
      </div>
    </div>
  )
}

export default Metric;
