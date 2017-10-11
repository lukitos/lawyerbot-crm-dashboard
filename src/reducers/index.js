import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import clients from './client';
import selectedClient from './selectedClient';
import assignedClients from './assignedClients';
import chartData from './chartData';
import metrics from './metrics';

const rootReducer = combineReducers({
  clients,
  selectedClient,
  assignedClients,
  chartData,
  metrics,
  form: formReducer
});

export default rootReducer;
